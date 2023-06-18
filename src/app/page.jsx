import AboutUs from './MainPage/AboutUs/AboutUs';
import Hero from './MainPage/Hero/Hero';
import Services from './MainPage/Services/Services';
import Promotions from './components/Promotions/Promotions';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Portfolio from './MainPage/Portfolio/Portfolio';

export default function Home() {
  return (
    <main>
      <AboutUs />
      <Services />
      <Portfolio />
      <Hero />
      <ContactForm />
      <Promotions />
      <Footer />
    </main>
  );
}
