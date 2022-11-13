const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
  let places = [{
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
  }]
  
/*Check back later*/res.render('places/index', { places })
  })
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
    

module.exports = router

