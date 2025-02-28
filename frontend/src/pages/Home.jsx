import React from 'react'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import LatestCollection from '../components/LatestCollection'
import Opium from '../components/Opium'
import BestSeller from '../components/BestSeller'
import NewArrivals from '../components/NewArrivals'
import Discount from '../components/Discount'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Hero2/>
      <LatestCollection/>
      <Opium/>
      <BestSeller/>
      <NewArrivals/>
      <Discount/>
    </div>
  )
}

export default Home