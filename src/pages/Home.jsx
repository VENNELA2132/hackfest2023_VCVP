import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
      <div className='Home'>
      <h1>Hello World</h1>
      <form>
        <h2>Enter the package name :</h2>
          <input type="text" name="name" />
          <Link to="/searchResultsPage">
            <button type="submit" > Search </button>
          </Link>
      </form>
    </div>
  )
}

export default Home;