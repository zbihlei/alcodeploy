// import {getSpecific} from '../services/getData';
import ProductsList from '../components/ProductsList';
import { GET_STRONG } from '../queries/queries';

export default async function Strong() {

  const title = 'strong'

  // const specific = await getSpecific(title);

  return (
  //  <ProductsList title={title} specific={specific} />
   <ProductsList title={title}  gqlQuery={GET_STRONG}/>

   )
  }
