import React from 'react';

const ProductCard = ({ product }) => {
  const { id, name, colors, price, charachteristics } = product;
  
  return (
    <section>
      <div>
        <h1> Кухня "{name}"</h1>
        <p>Артикул: {id}</p>
        <ul>
          {colors.map((color, index) => (
            <li key={index} style={{ backgroundColor: color }}></li>
          ))}
        </ul>
        <div>{price}</div>
      </div>
    </section>
  );
};

export default ProductCard;



// import React from 'react';


// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { useRouter } from 'next/router';

//  import ColorList from '../components/ColorList';

// export default function ProductCard({ name, id, price }) {
// //   const router = useRouter();

// //   const itemId = router.query.itemId;
// //   const item = getProductById(itemId);

//   return (
//     <section>
//       <div>
//         <div></div>
//         <div>
//           <h1>Кухня “{name}”</h1>
//         </div>
//         <p>Артикул: {id}</p>
//      <ColorList/>
//         <p>Комплектація</p>
//         <div>
//           <span>Кухня</span>
//           <span>Кухня+острів</span>
//         </div>
//         <div>
//         </div>
//         <div>від {price} грн.</div>
//       </div>
//     </section>
//   );
// }
