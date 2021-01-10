import models from '../database/models';

const { User } = models;

export class UserController {
    static async getUsers(req, res) {
        try {
            const allUsers = await User.findAll();
            
            res.status(200).json(allUsers);
        } catch (error) {
            res.status(400).json(`Error: ${error}`);
        }
    };
    
    static async addUser(req, res) {
        try {
            res.json('post request');
        } catch (error) {
            res.status(400).json(`Error: ${error}`);
        }
    };
};