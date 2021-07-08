import express, {Application} from 'express';

//ROUTES
import IndexRoutes from './routes/index.routes'
import PostRoutes from './routes/post.routes'



export class App{

    private app: Application;

    constructor(){        
        this.app=express();
        this.middlewares();
        this.routes();        
    }

    async listen(){
        await this.app.listen(3000);
        console.log('Server on port', 3000);        
    }

    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use(IndexRoutes)
        this.app.use('/posts',PostRoutes) 
      } 
}

