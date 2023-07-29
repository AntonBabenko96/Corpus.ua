import CatalogList from './components/CatalogList/CatalogList';
import CatalogItem from './components/CatalogItem/CtalogItem';

async function getProductsList(category) {
  const response = await fetch(
    `https://korpus.onrender.com/api/products?page=1&limit=6&category=${category}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

async function getProductItem(id) {
  const response = await fetch(
    `https://korpus.onrender.com/api/products/${id}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Catalog({ params }) {
  const category = params.id;
  console.log(category.length, 'length');

  if (category.length === 1) {
    const dataList = await getProductsList(category);
    return <CatalogList data={dataList} category={category} />;
  } else {
    const itemId = category[1];
    const dataItem = await getProductItem(itemId);
    return <CatalogItem data={dataItem} />;
  }
}
