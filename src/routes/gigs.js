import { Router } from "express";
// import { db } from "../config/database";
import Gig from "../models/Gig";

const router = new  Router();

// Get gig list
router.get('/', (req, res) => {
    // Gig.findAll()
    //     .then(gigs => {
            res.status(200).send('GET request');
        // })
        // .catch (error => console.log(error));
});

// Add a gig
router.get('/add', (req, res) => {
    
        const data = {
            title: 'Looking for a React developr',
            technologies: 'react, javascript, html, css',
            budget: '$3000',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur, lorem bibendum dapibus maximus, neque magna consectetur diam, at feugiat ex felis eu nisi. In porta tortor vel mauris faucibus, vitae volutpat ipsum aliquam. Praesent euismod fermentum ipsum quis dignissim. In gravida, odio nec cursus sollicitudin, ante lectus porta neque, et placerat arcu lorem vel quam. Ut ut diam in neque aliquam finibus.',
            contact_email: 'user1@gmail.com'
        };
        
        let { title, technologies, budget, description, contact_email } = data;
    
        // Inset into table
        Gig.create({
            title,
            technologies,
            budget,
            description,
            contact_email
        })
            .then(gig => res.redirect('/gigs'))
            .catch(err => console.log(err));
});

// router.get('/add', async (req, res) => {
//     try {
//         const data = {
//             title: 'Looking for a React developr',
//             technologies: 'react, javascript, html, css',
//             budget: '$3000',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur, lorem bibendum dapibus maximus, neque magna consectetur diam, at feugiat ex felis eu nisi. In porta tortor vel mauris faucibus, vitae volutpat ipsum aliquam. Praesent euismod fermentum ipsum quis dignissim. In gravida, odio nec cursus sollicitudin, ante lectus porta neque, et placerat arcu lorem vel quam. Ut ut diam in neque aliquam finibus.',
//             contact_email: 'user1@gmail.com'
//         };
        
//         let { title, technologies, budget, description, contact_email } = data;
    
//         // Inset into table
//         const addedGig = await Gig.create({
//             title,
//             technologies,
//             budget,
//             description,
//             contact_email
//         });
        
//         res.redirect('/gigs');
//         // return res.status(201).json({message: 'Gig created successfully', addedGig});
//     } catch (error) {
//         console.log(error);
//     }
// }); 

export default router;