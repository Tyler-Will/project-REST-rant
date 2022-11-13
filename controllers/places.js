const router = require('express').Router()
const places = require('../models/places.js')

/*router.get('/', (req, res) => {
    res.render('places/index', { places })
})*/

// GET /places
router.get('/', (req, res) => {
  /*let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'public/images/fried-rice.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'public/images/ramen.jpg'
  }, {
    name: 'Schrecknet Cafe',
    city: 'Beneath Los Angeles',
    state: 'CA',
    cuisines: 'Roasted Rat, Thing on a stick',
    pic: 'public/images/nossie.png'
  }]*/
res.render('places/index', { places })
  });

  router.get('/new', (req, res) => {
    res.render('places/new')
  })

  //POST places
  router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

module.exports = router

