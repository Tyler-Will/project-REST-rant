const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
  }, {
    name: 'Schrecknet Cafe',
    city: 'Beneath Los Angeles',
    state: 'CA',
    cuisines: 'Roasted Rat, Thing on a stick',
    pic: 'https://m.media-amazon.com/images/I/81VadNbPilL._AC_UY741_.jpg'
  }]
  
/*Check back later*/res.render('places/index', { places })
  })
  

module.exports = router

