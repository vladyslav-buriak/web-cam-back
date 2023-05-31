import { validationResult } from "express-validator";
import FormModel from "../../models/FormModel.js"

export const authData = async (req, res) => {

    res.json({ message: 'все працює' })
}



export const authFormData = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const doc = new FormModel({
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone,
    })

    const data = await doc.save();
    res.json(data)
}



