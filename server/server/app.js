import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import signupRouter from './routes/signup';
import cors from 'cors';
import DatabaseInterface from './database';


var dbInterface = new DatabaseInterface();

var app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.set('dbInterface', dbInterface);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);

dbInterface.createTable();


export default app;