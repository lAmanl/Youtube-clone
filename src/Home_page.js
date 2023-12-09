import React from 'react'
import Header from './Header.js'
import SideBar from './Sidebar.js'
import MainSection from './MainSection.js'

function Home_page() {
  return (
    <div>
      <div className='app_page'>
          <SideBar />
            <MainSection />
        </div>
    </div>
  )
}

export default Home_page