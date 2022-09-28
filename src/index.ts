import express, {Request, Response, NextFunction} from 'express';
import request from 'request';

const app = express();


const crawl = () => {
    var movie; 
    movie = request.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0d232375bd4487db8114660c6e1c1625&language=KR&page=1', async (err, res) => {         
        if (err) console.log(err);
    });
    console.log(JSON.parse(movie));
    //movie = JSON.parse(movie.body)['results'];
    return movie;
};

  
app.get('/', async (request:Request, response:Response, next: NextFunction) => {
    
    var temp = await crawl();
    console.log(temp);
    response.send(temp);
    //response.send(crawl());
    
});

app.listen(3000,()=>{
  console.log('start')
})

