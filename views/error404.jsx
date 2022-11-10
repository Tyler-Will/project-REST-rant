const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: THIS PAGE DOES NOT EXIST, IT IS NOTHING</h1>
              <p>IT IS A FALSEHOOD, AN ILLUSION, A MERE DELUSION CONJURED BY YOUR PITIFUL IMAGINE, A DENSE IMPENETRABLE VOID! LEAVE BEFORE IT CONSUMES YOU TOO!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404

