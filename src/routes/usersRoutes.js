import { Router } from "express";
import { UserController } from "../controllers/userController";
import models from '../database/models';

const { User } = models;

const router = Router();
/**
*  @swagger
*  api/v1/users:
*   get:
*    description: Get a list of all users
*    responses:
*      '200':
*        description: A successful response.
*/
router.get('/', UserController.getUsers);

/**
 *  @swagger
 *  /api/v1/users/{id}:
 *    get:
 *      description: Get one user
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *            minimum: 1
 *          description: request id
 *      responses:
 *        '200':
 *          description: User is displayed sucessfully.
 */
router.get('/:id', UserController.getOneUser);

/**
*  @swagger
*  api/v1/users/add:
*   post:
*    description: Add a user
*    responses:
*      '200':
*        description: A successful response.
*/
router.post('/add', UserController.addUser);
router.put('/:id', UserController.updateUser);

export default router;
