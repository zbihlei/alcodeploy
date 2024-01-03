import ProductList from '../../components/ProductsList';
// import { getSpecific } from '../../services/getData';
import { GET_COCTAIL } from '../../queries/queries';

export default async function Coctail(){
   
  const title = 'coctail'

    // const specific = await getSpecific(title);

  return (
    // <ProductList title={title} specific={specific}/>
    <ProductList title={title} gqlQuery={GET_COCTAIL}/>
    )
}

