const React = require('react')
const Def = require('../default')

function show (data) {
    console.log(data)
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <img id='showContent' src={data.place.pic}/>
            <h1>Rating</h1>
            <p id='showContent'>Not Rated</p>
            <h1>Description & Location</h1>
            <p id='showContent'>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit</a>     
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
           <button type="submit" className="btn btn-danger">
           Delete
          </button>
          </form> 
    
          </main>
        </Def>
    )
}

module.exports = show
