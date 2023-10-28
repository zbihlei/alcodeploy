import ProductList from '../../components/ProductsList'
import { getSpecific } from '../../services/getData';

export default async function Beer(){
    const title = 'beer'
    const specific = await getSpecific(title);

  return (
    <ProductList title={title} specific={specific}/>
    )
}

