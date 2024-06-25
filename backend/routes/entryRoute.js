import express from "express";
import { mpg } from "../models/entryModel.js";

const router = express.Router();

// Route for Save a new entry
router.post('/mpg', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.miles ||
            !request.body.gallons 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, miles, gallons',
            });
        }

        const calculatedMpg = miles / gallons;

        const newEntry = {
            title: request.body.title,
            miles: request.body.miles,
            gallons: request.body.gallons,
            calculatedMpg
        };
        const entry = await mpg.create(newEntry);

        return response.status(201).send(entry);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

// Route for Get All entries from database
router.get('/', async (request, response ) => {
    try {
        const entries = await mpg.find({});

        return response.status(200).json({
            count: entries.length,
            data: entries
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

// Route for Get One Entry from database by id
router.get('/:id', async (request, response ) => {
    try {

        const { id } = request.params;

        const entry = await mpg.findById(id);

        return response.status(200).json(entry);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

// Route for Update an Entry
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.miles ||
            !request.body.gallons 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, miles, gallons, mpg',
            });
        }
        const { id } = request.params;

        const result = await mpg.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Entry not found' })
        }

        return response.status(200).send({ message: 'Entry updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

// Route for Deleting an Entry
router.delete('/:id', async (request, response) =>  {
    try {
        const { id } = request.params;

        const result = await mpg.findByIdAndDelete(id);
        
        if (!result) {
            return response.status(404).json({ message: 'Entry not found' });
        }

        return response.status(200).send({ message: 'Entry delete successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;