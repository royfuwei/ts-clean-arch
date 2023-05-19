/* eslint-disable */
import 'reflect-metadata';
import * as dotenvFlow from 'dotenv-flow';
const envFlow = dotenvFlow.config();

process.env.NODE_ENV = envFlow.parsed!['NODE_ENV'];