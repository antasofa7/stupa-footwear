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

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
