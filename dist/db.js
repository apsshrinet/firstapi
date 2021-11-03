"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var mysql2_1 = __importDefault(require("mysql2"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.db = mysql2_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});
exports.db.connect(function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Succesfully connected to database....");
    }
});
var checkcratetable = "SELECT EXISTS(SELECT * FROM information_schema.tables WHERE table_schema = 'db' AND table_name = 'table');";
exports.db.query(checkcratetable, function (err, result) {
    if (err) {
        throw err;
    }
    else {
        if (checkcratetable) {
            console.log("Table user already exists in database");
        }
        else {
            var createtable = "CREATE TABLE pet (email VARCHAR(255),phoneno INTEGER,name VARCHAR(255), age INTEGER, password VARCHAR(255));";
            exports.db.query(createtable, function (err, result) {
                if (err) {
                    throw err;
                }
                else {
                    console.log("Created table");
                }
            });
        }
    }
});
