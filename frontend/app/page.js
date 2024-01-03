// import {getGeneral} from './services/getData';
import Main from '../app/components/Main';

import {GET_GENERAL} from './queries/queries';

export default async  function Home() {

  // const general = await getGeneral();

  return (
  //  <Main general={general} />
  <Main gqlQuery={GET_GENERAL}/>
  )
}
