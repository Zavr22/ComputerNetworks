import express from 'express';


import {findBookByAuthor} from "../controllers/handler.js";


const router = express.Router();



router.post('/getBook', findBookByAuthor)



// will match any other path

export default router;