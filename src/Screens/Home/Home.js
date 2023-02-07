import React from 'react'
import Hero from '../../components/Hero/Hero'
import Feature from '../../components/Feature/Feature'
import Blog from '../../components/Blog/Blog'
import Contact from '../../components/Contact/Contact'
import Review from '../../components/Review/Review'
import AppPage from './../../components/AppPage/AppPage';
import Video from '../../components/Video/Video'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <Video/>
      <Blog/>
      <AppPage/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home