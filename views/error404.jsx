const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: THIS PAGE DOES NOT EXIST, IT CONTAINS NOTHING</h1>
              <p>IT IS A FALSEHOOD, AN ILLUSION, A SAD NON-EXISTANCE CONJURED BY YOUR PITIFUL IMAGINATION, A DENSE IMPENETRABLE VOID! LEAVE BEFORE IT CONSUMES YOU TOO!</p>
              <div>
                <img src="public\images\cave.jpg"/>
                <div>
                Photo by <a href="https://unsplash.com/@stafra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Stephen Tafra</a> on <a href="https://unsplash.com/s/photos/cave?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
              
  
  
          </main>
      </Def>
    )
  }
  

module.exports = error404

