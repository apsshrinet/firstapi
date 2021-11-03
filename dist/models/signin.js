"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
var db_1 = require("../db");
console.log("signin model");
var login = function (user_signin_info) {
    var queryString = "\n      SELECT \n        email, password\n      FROM user\n      WHERE user.email=?";
    db_1.db.query(queryString, user_signin_info.email, function (err, result) {
        if (err) {
            console.log(err.stack);
        }
        ;
        var row = result[0];
        if (user_signin_info.password == row.password) {
            console.log("Successfully logedin....");
        }
        else {
            throw new Error("Wrong password renenter password...");
        }
    });
};
exports.login = login;
