import { Router } from "express";
import { UserController } from "../controllers/userController";
import models from '../database/models';

const { User } = models;

const router = Router();
/**
*  @swagger
*  /users:
*   get:
*    description: Get a list of all users
*    responses:
*      '200':
*        description: A successful response.
*/
router.get('/', UserController.getUsers);

/**
*  @swagger
*  /users/add:
*   post:
*    description: Add a user
*    responses:
*      '200':
*        description: A successful response.
*/
router.post('/add', UserController.addUser);
router.put('/:id', UserController.updateUser);

export default router;
