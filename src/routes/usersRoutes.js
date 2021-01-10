import { Router } from "express";
import { UserController } from "../controllers/userController";
import models from '../database/models';

const { User } = models;

const router = Router();

router.get('/', UserController.getUsers);
router.post('/add', UserController.addUser);

export default router;
