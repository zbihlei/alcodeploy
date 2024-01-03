import ProductList from '../../components/ProductsList';
// import { getSpecific } from '../../services/getData';
import { GET_BEER } from '../../queries/queries';

export default async function Beer(){
    const title = 'beer'
    // const specific = await getSpecific(title);

  return (
    // <ProductList title={title} specific={specific} />
    <ProductList title={title} gqlQuery={GET_BEER}/>
    )
}

