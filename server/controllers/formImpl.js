const router = require('express').Router()
const FormImpl = require('../models/FormImpl')
const Form = require('../models/Form')

const cors = require('cors')
router.use(cors())

router.post('/', async (req, res) => {
  const body = req.body
  console.log(body)
  const originId = body.originId
  await Form.findOne({_id:originId}).filledForms.concat(body.id)
  try{
    const formImpl = await FormImpl.create(body)
    res.status(201).json(formImpl.toJSON())

  }catch(error){
    console.log(error)
    res.status(400).json({
    error: 'Failed to accept form submission'
    })
  }
})

// router.get('/', async (req, res) => {
//   try{
//     const forms = await Form.find({})
//     res.status(200).json(forms)
//   }catch(error){
//     res.status(404).json({
//       error: 'Cant find forms'
//     })
//   }
// })


router.get('/:_id', async (req, res) => {
    try{
      //const id = Number(req.params._id)
      const form = await Form.find(form._id === req.body._id)
      const formImplsID = form.filledForms
      const formImpls = await FormImpl.find({id: formImplsID})
      console.log(form)
      res.status(200).json(id)
    }catch(error){
      res.status(404).json({
        error: 'Cant find submissions'
      })
    }
  })

module.exports = router