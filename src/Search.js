import React from 'react';

const Search = () => (
    <div style={{ position: 'absolute', right: 10, top: 5 }}>
            <form action="/search" method="get" >
                <label htmlFor="search">
                    <span className="visually-hidden">Search</span>
                </label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search"
                    name="s"
                />
               <div  style={{ position: 'absolute', bottom: -7, right: 50, left: 275}}>
               <button type="submit">Search</button>
               </div> 
                
                
                
            </form>
            </div>

);

export default Search;