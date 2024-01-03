import ProductPage from '../../../components/ProductPage'; 
// import { getSpecificItem } from '../../../services/getData';
import { GET_COCTAIL_BY_ID } from '../../../queries/queries';

export default async function SingleProductPage({params}){
  
  const title = 'coctail';

// const specificProduct = await getSpecificItem(title, params.id);

  return (
    // <ProductPage title={title} specificProduct={specificProduct} />
    <ProductPage title={title}  gqlQuery = {GET_COCTAIL_BY_ID}/>
  )
}

