import AboutUs from './MainPage/AboutUs/AboutUs';
import Hero from './MainPage/Hero/Hero';
import Services from './MainPage/Services/Services';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <ContactForm />
      <AboutUs />
      <Services />
      <Footer />
    </main>
  );
}
