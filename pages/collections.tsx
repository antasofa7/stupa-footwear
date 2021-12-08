import Brand from '../components/molecules/Brand';
import Chat from '../components/molecules/Chat';
import ToTop from '../components/molecules/ToTop';
import Collections from '../components/organism/Collections';
import Feature from '../components/organism/Feature';
import Footer from '../components/organism/Footer';
import Navbar from '../components/organism/Navbar';
import Testimonial from '../components/organism/Testimonial';

export default function collections() {
  return (
        <>
        <Navbar />
        <section className="px-3 pb-3">
            <Brand />
            <Collections />
            <Feature />
            <Testimonial />
            <ToTop />
            <Chat />
        </section>
        <Footer />

        </>
  );
}
