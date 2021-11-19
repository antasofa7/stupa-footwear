import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organism/Navbar';
import Banner from '../components/organism/Banner';
import Brand from '../components/molecules/Brand';
import NewArrivals from '../components/organism/NewArrivals';
import Chat from '../components/molecules/Chat';
import BestSellers from '../components/organism/BestSellers';
import Feature from '../components/molecules/Feature';
import ToTop from '../components/molecules/ToTop';

import '../styles/Home.module.scss';
import Testimonial from '../components/molecules/Testimonial';
import Footer from '../components/organism/Footer';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <main>
        <Brand />
        <NewArrivals />
        <Chat />
        <BestSellers />
        <Feature />
        <ToTop />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
};

export default Home;
