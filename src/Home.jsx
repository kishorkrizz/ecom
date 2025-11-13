import React from 'react'
import Card from './Card'
import logo from './assets/amzn.png'
import Entry from './entry.jsx'


const Home = () => {
  return (
    <>
    <div className="bg-gray-700 h-screen">
        <img className="mx-auto rounded-3xl" src={logo} alt="My Logo" width="200" />
        
      <div className="flex flex-row p-5 justify-center gap-5">
        <a href="https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2"><Card title="Amazon Prime" desc="Stream thousands of movies and shows." />
        </a>
        <Card title="Amazon Music" desc="Listen to millions of ads with no songs." />
        <Card title="Amazon Fresh" desc="Grocery shopping made easy and fast." />
        
      </div>
      <Entry />
    </div>
    </>
  )
}

export default Home
