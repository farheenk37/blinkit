import React from 'react'
import Ads from './HomeComponent/Ads'
import Banner from './HomeComponent/Banner'
import ProductsAdsOne from './HomeComponent/ProductsAdsOne'
import ProductAdsTwo from './HomeComponent/ProductAdsTwo'
import DairyProducts from './HomeComponent/DairyProducts'
import RollingPaper from './HomeComponent/RollingPaper'
import Snacks from './HomeComponent/Snacks'
import Hookkah from './HomeComponent/Hookkah'
import MouthFreshner from './HomeComponent/MouthFreshner'
import Candies from './HomeComponent/Candies'


export default function Home() {
  return (
    <div>
      
      <Ads/>
      <Banner/>
      <ProductsAdsOne/>
      <ProductAdsTwo/>
      <DairyProducts/>
      <RollingPaper/>
      <Snacks/>
      <Hookkah/>
        <MouthFreshner/>
        <Candies/>
    </div>
  )
}
