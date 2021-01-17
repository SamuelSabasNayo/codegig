import { create } from 'express-handlebars';
import models from '../database/models';

const { User } = models;

export class UserController {
  static async getUsers(req, res) {
    try {
      const allUsers = await User.findAll();
      
      res.status(200).json({ message: allUsers });
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  };
  
  static async addUser(req, res) {
    try {
      // const { name, email } = req.body;
      console.log(req.body)
      const existingUser = await User.findOne({
        where: { email }
      });
      
      if (existingUser) return res.status(409).json({ message: 'User already exist!', name, email: existingUser.email });
      
      const savedUser = await User.create({
        name,
        email
      })
      res.status(201).json({
        message: 'User registered successfully!',
        savedUser
      });
    } catch (error) {
      res.status(400).json(`Error: ${error}`);
    }
  };
  
  static async updateUser(req, res) {
    try {
      const { name, email } = req.body;
      const existingUser = await User.findOne({
        where: { email }
      });
      
      if (!existingUser) return res.status(400).json({ message: 'User does not exist!', name, email });
      
      const updatedUser = await User.update({ name }, {
        name: 'Samuel Doe'
      });
      res.status(200).json({ message: 'User updated!', updatedUser });
    } catch (error) {
      res.status(400).json({ Error: error })
    };
  };
};
