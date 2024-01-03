"use client"

import styles from '../styles/confirm_list.module.scss';
import { useSelector } from "react-redux";
import ConfirmListItem from './ConfrimList_Item';

const ConfirmList = () => {
  
    const basket= useSelector((state)=>state.basket.basket);
    const prices = basket.map((item) =>  item.price);
    const sum = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <div className={styles.wrapp}>
  {basket.length ? (
    basket.map((item) => (
      <ConfirmListItem key={item.id} {...item} />
    ))
  ) : null}
  {basket.length > 0 && (
    <div className={styles.sum}>
      <span>Sum:</span> <span>{sum} <span style={{ fontSize: '16px' }}>₴</span></span>
    </div>
  )}
</div>

  )
}

export default ConfirmList