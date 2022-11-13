const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="public\images\ramen2.jpg" alt="ramen" />
                <div>
                Photo by <a href="https://unsplash.com/@fla5h904?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Hunter</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
             </a>

          </main>
      </Def>
    )
  }
  <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

module.exports = home
