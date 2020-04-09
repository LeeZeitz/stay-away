import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  white_pawn, 
  white_rook, 
  white_knight, 
  white_bishop, 
  white_queen, 
  white_king, 
  black_pawn, 
  black_rook, 
  black_knight, 
  black_bishop, 
  black_queen, 
  black_king
} from './Images/images'
import Game from './Game';
import Piece from './Piece';
import {
  // dragStart, 
  dragOver
 } from './Piece';

// Define files and rows.
let FILES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// let ROWS = ['1', '2', '3', '4', '5', '6', '7', '8'];


// Create the chessboard and set up the initial starting position.
class ChessBoard extends Component {
  
  render() {
    let rows = [];
   
    for(var i = 8; i >= 1; i--) {
      rows.push(<Rank rank_number = {i}/>);
    }

    return <div className = "chess_board">{rows}
    </div>;
  }
}

class Rank extends Component {
  
  render() {
    let row = [];
    
    for (let i = 1; i <= 8; i++) {
      let cur_file = FILES[i - 1];
      row.push(<Square id = {(cur_file + this.props.rank_number)}/>);
    }

   return <div className = "rank">{row}</div>;
  }
}

class Square extends Component {
  
  render() {
    
    // Obtain the current square's file and rank.
    let file = this.props.id.charAt(0);
    let rank = Math.ceil(Number(this.props.id.charAt(1)));    

    // Determine the parity of the square for styling purposes.
    let className = "chess_cell ";
    if (rank % 2) {
      className += 'odd';
    } else {
      className += 'even';
    }
    
    // Set up the pawns.
    if (rank === 2) {
      return (<div className = {className}> 
        <Picture pic = {white_pawn} className = "photo"></Picture>
      </div>
      )
    } else if(rank === 7) {
        return (<div className = {className}> 
          <Picture pic = {black_pawn} className = "photo"></Picture>
        </div>
        )
    } 
    
    // Set up the rest of the pieces.
    else {

      // Set up the rooks.
      if (rank === 1 && (file === 'A' || file === 'H')) {
        return (<div className = {className}> 
          <Picture pic = {white_rook} className = "photo"></Picture>
        </div>  
        )
      } else if (rank === 8 && (file === 'A' || file === 'H')) {
          return (<div className = {className} className = "photo"> 
            <Picture pic = {black_rook}></Picture>
          </div>  
        )
      }

      // Set up the knights.
      if (rank === 1 && (file === 'B' || file === 'G')) {
        return (<div className = {className}> 
          <Picture pic = {white_knight}></Picture>
        </div>  
        )
      } else if (rank === 8 && (file === 'B' || file === 'G')) {
          return (<div className = {className}> 
            <Picture pic = {black_knight}></Picture>
          </div>  
        )
      }

      // Set up the bishops.
      if (rank === 1 && (file === 'C' || file === 'F')) {
        return (<div className = {className}> 
          <Picture pic = {white_bishop}></Picture>
        </div>  
        )
      } else if (rank === 8 && (file === 'C' || file === 'F')) {
          return (<div className = {className}> 
            <Picture pic = {black_bishop}></Picture>
          </div>  
        )
      }

      // Set up the queens.
      if (file === 'D' && rank === 1) {
        return (<div className = {className}> 
          <Picture pic = {white_queen}></Picture>
        </div>  
        )
      } else if (file === 'D' && rank === 8) {
          return (<div className = {className}> 
            <Picture pic = {black_queen}></Picture>
          </div>  
        )
      }

      // Set up the kings.
      if (file === 'E' && rank === 1) {
        return (<div className = {className}> 
          <Picture pic = {white_king}></Picture>
        </div>  
        )
      } else if (file === 'E' && rank === 8) {
          return (<div className = {className}> 
            <Picture pic = {black_king}></Picture>
          </div>  
        )
      }

      // Set up the empty starting squares.
      return (<div className = {className}> 
      </div>
      )
    }
  }
}

class Picture extends Component {
  render() {
    return (
      <div className = "picture">
        <Game>
          <Piece>
            <div draggable='true' onDragStart = {Piece.dragStart}>
              <img src={this.props.pic} className='photo' />
            </div>
            <div onDragOver={ Piece.dragOver } onDrop={ Piece.drop } />
          </Piece>
        </Game>
      </div>
    );
  }
}

export default ChessBoard;