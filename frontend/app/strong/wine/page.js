import ProductList from '../../components/ProductsList';
// import { getSpecific } from '../../services/getData';
import {GET_WINE} from '../../queries/queries';

export default async function Wine(){
    const title = 'wine'

    // const specific = await getSpecific(title);

  return (
    // <ProductList title={title} specific={specific} />
    <ProductList title={title} gqlQuery={GET_WINE}/>
    )
}

