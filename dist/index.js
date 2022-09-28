"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var crawl = function () {
    request_1.default.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0d232375bd4487db8114660c6e1c1625&language=KR&page=1', function (err, res) {
        if (err)
            console.log(err);
        console.log(res.body);
    });
};
crawl();
