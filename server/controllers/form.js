const router = require('express').Router()
const Form = require('../models/Form')

const cors = require('cors')
router.use(cors())

router.post('/', async (req, res) => {
  const body = req.body
  console.log(body)
   if (!body.name) {
        return res.status(400).json({
        error: 'name missing'
        })
    }

  try{
    const form = await Form.create(body)
    res.status(201).json(form.toJSON())

  }catch(error){
    console.log(error)
    res.status(400).json({
    error: 'Failed to create form'
    })
  }
})

router.get('/', async (req, res) => {
  try{
    const forms = await Form.find({})
    res.status(200).json(forms)
  }catch(error){
    res.status(404).json({
      error: 'Cant find forms'
    })
  }
})


// router.get('/:id', async (req, res) => {
//   const id = Number(req.params.id)
//   const form = await Form.find(form => form.id === id)
//   if (form) {
//     res.json(form)
//   } else {
//     res.status(404).end()
//   }
// })

module.exports = router