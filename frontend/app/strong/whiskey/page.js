import ProductList from '../../components/ProductsList';
// import { getSpecific } from '../../services/getData';
import { GET_WHISKEY } from '../../queries/queries';

export default async function Whiskey(){
    const title = 'whiskey'

    // const specific = await getSpecific(title);

  return (
    // <ProductList title={title} specific={specific} />
    <ProductList title={title}  gqlQuery={GET_WHISKEY}/>
    )
}

