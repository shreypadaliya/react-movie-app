import React, {useContext } from 'react'
import { AppContext } from './context';

const Search = () => {
  const {query,setQuery,isError}=useContext(AppContext);
  return (
    <>
      <section className='search-section'>
        <h2>search your favourite movie</h2>
        <form action='#' onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input type='text' placeholder='search ...'  value={query} 
          onChange={(e)=> setQuery(e.target.value)}  
          />
        </div>
        </form>
        <div className='card-error'>
        <p>{isError.show && isError.msg}</p>

        </div>
      </section>
    </>
  )
}

export default Search
