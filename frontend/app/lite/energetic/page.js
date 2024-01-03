import ProductList from '../../components/ProductsList';
// import { getSpecific } from '../../services/getData';
import { GET_ENERGETIC } from '../../queries/queries';

export default async function Energetic(){
   
  const title = 'energetic'

    // const specific = await getSpecific(title);

  return (
    // <ProductList title={title} specific={specific}/>
    <ProductList title={title} gqlQuery={GET_ENERGETIC}/>
    )
}

