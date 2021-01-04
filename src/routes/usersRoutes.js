import { Router } from "express";
import models from '../database/models';

const { User } = models;

const router = Router();

router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll();
        
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(400).json(`Error: ${error}`);
    }
});

export default router;
