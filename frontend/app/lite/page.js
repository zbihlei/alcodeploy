// import {getSpecific} from '../services/getData';
import ProductsList from '../components/ProductsList';
import { GET_LIGHT } from '../queries/queries';

export default async function Lite() {

  const title = 'lite'

  // const specific = await getSpecific(title);

  return (
  //  <ProductsList title={title} specific={specific} />
   <ProductsList title={title}  gqlQuery={GET_LIGHT}/>

   )
  }