

import fs from "fs";
import Matrix from "../models/matrix.js";
import {where} from "sequelize";
import sequelize from "../utils/database.js";


export const outMatrix = (req, res, next) =>{
    Matrix.findAll({

        attributes:
            ['rawNum', 'colNum', 'value'],


    }).then(el => {
        if (el){
            return res.status(200).json(el)
            console.log(el)
        }
    })
}

export const insertMatrixEl = async (req, res,next) =>{
    const obj = JSON.parse(JSON.stringify(req.body))
    let raw = obj.raw
    let col = obj.col
    let value = obj.val
    Matrix.findOne({
        where:{
            rawNum:raw,
            colNum: col,
        }
    }).then(element =>{
        if (element){
            return res.status(409).json({message: "element already exists"});
        } else if(!element) {
            Matrix.create({
                rawNum: raw,
                colNum: col,
                value: value
            }).then(() => {
                return res.status(200).json({message:"element added"});
            })
        }
    })

}

export const updateElement = async (req, res, next) => {
    const obj = JSON.parse(JSON.stringify(req.body))
    let raw = obj.raw
    let col = obj.col
    let value = obj.val
    const [results, metadata] = await sequelize.query(
        `UPDATE matrices SET value = ${value} WHERE rawNum = ${raw} AND colNum = ${col}`
    );
    if (results) {
        return res.status(200).json({message:"element updated"});
    }
}

export const delEl = (req, res, next) =>{
    const obj = JSON.parse(JSON.stringify(req.body))
    let raw = obj.raw
    let col = obj.col
    let value = obj.val
    Matrix.destroy({where:{
        rawNum : raw,
        colNum: col
        }}).then(()=>{
            return res.status(200).json({message : "element deleted successfully"})
    })
}

export const outMatrixPartly = (req, res, next) =>{
    const obj = JSON.parse(JSON.stringify(req.body))
    let raw = obj.raw
    let col = obj.col
    Matrix.findAll({
        where:{
           rawNum: obj.raw,
           colNum: obj.raw ,
        },
        attributes:
            ['rawNum', 'colNum', 'value'],


    }).then(el => {
        if (el){
            return res.status(200).json(el)
            console.log(el)
        }
    })
}