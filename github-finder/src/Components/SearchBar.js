import React from 'react'
import search from "../assets/search.png"

export default function SearchBar() {
  return (
    <div className='mt-8'>
      <div className='bg-white h-[60px] flex items-center rounded-2xl pl-2 pr-2 shadow-xl dark:bg-myDarkModeBlue'>
          <img src={search} alt="search-icon" className='w-5 h-5'/>
          <input type={"text"} placeholder="Search GitHub username…" className="text-xs text-myDarkModeBlack outline-none w-full pl-2 dark:bg-myDarkModeBlue dark:text-myLightWhite"></input>
          <button className='w-28 h-10 rounded-xl text-white bg-myBlue font-bold'>Search</button>
      </div>
    </div>
  )
}
