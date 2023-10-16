import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import MainLayout from '../components/Layout/MainLayout';

const Home = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <MainLayout title={"Home"} description={"loremsdjfjjjjjjjjjjjjj"}>
        <div>
          <p>Otheres</p>
        </div>
    </MainLayout>
  )
}

export default Home