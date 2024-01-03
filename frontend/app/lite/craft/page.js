import ProductList from '../../components/ProductsList';
// import { getSpecific } from '../../services/getData';
import {GET_CRAFT} from '../../queries/queries';

export default async function Craft(){
  
  const title = 'craft'

    // const specific = await getSpecific(title);

  return (
    // <ProductList title={title} specific={specific} />
    <ProductList title={title} gqlQuery={GET_CRAFT}/>
    )
}

