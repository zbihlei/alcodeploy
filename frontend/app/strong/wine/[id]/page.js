import ProductPage from '../../../components/ProductPage';
// import { getSpecificItem } from '../../../services/getData';
import {GET_WINE_BY_ID} from '../../../queries/queries';

export default async function SingleProductPage({params}){
  
const title = 'wine';

// const specificProduct = await getSpecificItem(title, params.id);

  return (
    // <ProductPage title={title} specificProduct={specificProduct} />
    <ProductPage title={title}  gqlQuery = {GET_WINE_BY_ID}/>
  )
}