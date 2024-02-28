"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const zod_1 = require("zod");
const app = express();
const userValidation = zod_1.z.object({
    name: zod_1.z.string().email(),
    age: zod_1.z.string().optional()
});
app.put('/users', (req, res) => {
    const { success } = userValidation.safeParse(req.body);
    const update = req.body;
    if (!success) {
        res.status(411).json({});
        return;
    }
    res.send({
        message: "user updates"
    });
});
