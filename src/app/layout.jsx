// import 'styles/index.scss';
// import '../styles/index.scss';
// import './global.scss';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'KORPUS',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
