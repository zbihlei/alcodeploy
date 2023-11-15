import {getSpecific} from '../services/getData';
import ProductsList from '../components/ProductsList'

export default async function Strong() {

  const title = 'strong'
  const specific = await getSpecific(title);

  return (
   <ProductsList key={specific.map((item) => item.id)} title={title} specific={specific}/>
   )
  }