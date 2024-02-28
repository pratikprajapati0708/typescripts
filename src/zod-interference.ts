const express = require('express');
import {z} from 'zod';

const app = express();

const userValidation = z.object({
    name : z.string().email(),
    age : z.string().optional()
})

type FinalUserSchema = z.infer<typeof userValidation>;

app.put('/users',(req : any,res : any)=>{
    const {success} = userValidation.safeParse(req.body);
    const update : FinalUserSchema = req.body;

    if(!success){
        res.status(411).json({});
        return;
    }
    res.send({
        message : "user updates"
    })
})