import express, {Request, Response, NextFunction} from 'express';
const axios = require('axios');


const getMovie = async (page : string) => {
    var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=0d232375bd4487db8114660c6e1c1625&language=KR&'

    try {
        return await axios.get(url+'page='+page);
    } catch (error) {
        console.error(error);
    }
};

const getMovieId = async (id : string) => {
    var url = 'https://api.themoviedb.org/3/find/'+id+'?api_key=0d232375bd4487db8114660c6e1c1625&language=KR&external_source=imdb_id'

    try {
        return await axios.get(url);
    } catch (error) {
        console.error(error);
    }
};

const app = express();

app.get('/now_playing', async (request:Request, response:Response, next: NextFunction) => {
    var pages:string;

    if (typeof request.query.page == 'undefined'){
        pages = '1'
    }
    else{
        pages = String(request.query['page']);
    }

    var temp = await getMovie(pages);
    var arr = new Array();

    for(var key in temp.data.results){
        arr.push(temp.data.results[key].title);
    }
    response.send(arr);
    
});

app.get('/movie_id', async (request:Request, response:Response, next: NextFunction) => {
    var external_id:string;

    if (typeof request.query.external_id == 'undefined'){
        external_id = 'none'
    }
    else{
        external_id = String(request.query['external_id']);
    }

    var temp = await getMovieId(external_id);
    console.log(temp.data.movie_results)
    response.send(temp.data.movie_results);
    
});

app.listen(3000,()=>{
  console.log('start')
})