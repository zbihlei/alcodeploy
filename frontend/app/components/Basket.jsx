"use client"

import styles from '../styles/basket.module.scss';
import Link from 'next/link';
import { useSelector } from "react-redux";
import BasketItem from '../components/BasketItem';

const Basket = () => {

  const basket= useSelector((state)=>state.basket.basket);
  
  return (

    <div className={styles.wrapp}>

  {basket.length ? (
    basket.map((item) => (
      <BasketItem key={item.id} {...item} />
    ))
  ) : (
    <div className={styles.empty}>Basket is <span>empty!</span></div>
  )}
  {basket.length > 0 && <Link className={styles.confirm} href="/confirm">Confirm → </Link>}

</div>

  )

} 

export default Basket