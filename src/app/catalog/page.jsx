import React from 'react';
import Kitchen from './kitchen/page';
import CardDesignEl from './components/cardDesignEl/CardDesignEl';
import Footer from '../components/Footer/Footer';

const Catalog = () => {
  return (
    <div>
      <Kitchen />
      <CardDesignEl />
      <Footer />
    </div>
  );
};

export default Catalog;
