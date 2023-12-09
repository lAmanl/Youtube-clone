import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import SearchPage from './SearchPage'

function Search() {
  return (
    <div className='app_page' style={{display:'flex'}}>
        <Sidebar />
        <SearchPage />
    </div>
  )
}

export default Search