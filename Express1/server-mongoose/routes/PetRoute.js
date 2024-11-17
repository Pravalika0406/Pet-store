const express = require('express')
const router = express.Router();
const Pets = require('../models/PetsModel')
const validate = require('../config/auth')

router.get('/count', async (req, res) => {
    try {
        const count = await Pets.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})
// Method : GET  || API : localhost:3000/products/all
router.get('/all', async (req, res) => {
    try {
        const pets = await Pets.find()
        return res.status(200).json(pets)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : POST  || API : localhost:3000/products/add
router.post('/add', async (req, res) => {
    try {
        const newpet = new Pets(req.body)
        const { name, img, price } = newpet
        if (!name || !img || !price) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newpet.save()
        return res.status(200).json(newpet)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : PUT  || API : localhost:3000/products/edit/_id
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingpet = await Pets.findOne({ _id: id })
        if (!existingpet) {
            return res.status(404).json({ message: "Pet not found" })
        }
        const updatedpet = await Pets.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedpet)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : DELETE  || API : localhost:3000/products/delete/_id
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existingpet = await Pets.findOne({ _id: id })
        if (!existingpet) {
            res.status(404).json({ message: "Pet not found" })
        }
        await Pets.findByIdAndDelete(id)
        return res.status(200).json({ message: "Pet Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router

// 1.GET
// 2.POST
// 3.PUT
// 4.DELETE

// 1.READ
// 2.CREATE
// 3.UPDATE
// 4.DELETE


// 200 -> OK
// 404 -> NOT FOUND
// 500 -> INTERNAL SERVER ERROR
// 201 -> CREATED
// 400 -> BAD Request
// 401 -> UnAuthorized
// 409 -> Conflict



// 1.GET
// 2.POST
// 3.PUT
// 4.DELETE
// 1.READ
// 2.CREATE
// 3.UPDATE
// 4.DELETE