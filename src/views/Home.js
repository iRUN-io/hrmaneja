import React from 'react';
import SubscribeSection from '../components/sections/SubscribeSection';
import NewHero from '../components/sections/NewHero'
import Features from '../components/sections/Features'
import LearnMore from '../components/LearnMore';
import { ToastContainer } from 'material-react-toastify';
// import Tabs from '../components/TabComponent/Tabs';

const Home = () => {

  return (
    <>
    <ToastContainer />
      <NewHero />
      {/* <Tabs /> */}
      <Features />
      <LearnMore />
      <SubscribeSection topDivider />
    </>
  );
}
export default Home;