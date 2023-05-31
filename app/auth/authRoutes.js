import { authData, authFormData } from "./authController.js";
import express from "express";


const router = express.Router();

router.route('/login').get(authData)

router.route('/send').post(authFormData)



export default router;


