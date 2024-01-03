"use client"

import styles from '../styles/products_List.module.scss';
import Link from 'next/link';
import { LOCAL_HOST } from '../utils/constants';

import { useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV === 'development') { //dev mode only
  loadDevMessages();
  loadErrorMessages();
}

const ProductList = ({specific, title, gqlQuery}) => {

  const { data } =  useQuery(gqlQuery);
  const firstKey = data ? Object.keys(data)[0] : null;
  const list = firstKey ? data[firstKey] : [];

  const barCount = list && list.some(item => item.type);
  // const barCount = specific && specific.some(item => item.type);
  const beer = title  === 'beer';
  const energetic = title  === 'energetic';
  const coctail = title  === 'coctail';
  const craft = title  === 'craft';
  const wine = title  === 'wine';
  const whiskey = title  === 'whiskey';

  return (

    <div className={`${styles.wrapp} 
    ${barCount ? '' : styles.barCount} 
    ${beer ? styles.beer : ''}
    ${energetic ? styles.energetic : ''}
    ${coctail ? styles.coctail : ''}
    ${craft ? styles.craft : ''}
    ${wine ? styles.wine : ''}
    ${whiskey ? styles.whiskey : ''}`}>

    {/* {specific.map(item => ( */ /*using with sql*/} 
    {list.map((item, index) => (
    <>
    {item.type ?  
    
    // <Link importance="high" rel="preload"  href={`${LOCAL_HOST}/${item.type}/${title}/${item.id}`} key={index} style={{textDecoration: 'none'}}>
    <Link importance="high" rel="preload"  href={`${LOCAL_HOST}/${item.type}/${title}/${item._id}`} key={index} style={{textDecoration: 'none'}}>

    <div className={styles.item} >
      <div className={styles.image}>
        <img src={item.image} alt="image" /> 
      </div>
      <div className={styles.name}>
        {item.name}
      </div>
       <div className={styles.description}>{item.description.slice(0,100)}</div>
       <div className={styles.price}>{item.price}<span> ₴</span></div>
    </div>
    </Link>
  
   :   

    <Link importance="high" rel="preload"  href={`${LOCAL_HOST}/${title}/${item.name}`} key={index} style={{textDecoration: 'none'}}>
    <div className={styles.item} >
    <div className={styles.image}>
        <img src={item.image} alt="image" />
    </div>
      <div className={styles.name}>
        {item.name}
      </div>
    </div>
    </Link>

 }
    </>
      ))}

</div>

  )
}

export default ProductList
