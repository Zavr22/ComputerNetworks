import express from 'express';


import {delEl, insertMatrixEl, outMatrix, outMatrixPartly, updateElement} from "../controllers/handler.js";


const router = express.Router();



router.post('/getMatrix', outMatrix)

router.get("/create", insertMatrixEl)

router.post("/update", updateElement)

router.post("/delete", delEl)

router.post('/getMatrixP', outMatrixPartly)


// will match any other path

export default router;