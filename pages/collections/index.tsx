import React from 'react';
import Navbar from '../../components/organism/Navbar';
import Catalog from '../../components/organism/Catalog';
import Brand from '../../components/molecules/Brand';
import Chat from '../../components/molecules/Chat';
import Feature from '../../components/molecules/Feature';
import Testimonial from '../../components/molecules/Testimonial';
import ToTop from '../../components/molecules/ToTop';
import Footer from '../../components/organism/Footer';

export default function index() {
  return (
        <>
            <Navbar />
            <main>
                <Brand />
                <Catalog />
                <Chat />
                <Feature />
                <Testimonial />
                <ToTop />
            </main>
            <Footer />
        </>
  );
}
