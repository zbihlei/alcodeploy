"use client"

import styles from '../styles/buyed.module.scss';
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import { useEffect } from 'react';

const Buyed = () => {
   
  const basket= useSelector((state)=>state.basket.basket);
  const router = useRouter();

  useEffect(() => {
    if (!basket || basket.length === 0) {
      router.push('/');
    }
  }, [basket, router]);

    setTimeout(()=>{
        router.push('/');
    },3000 )
  return (
    <div className={styles.wrapp}>
        <div className={styles.text}>
           <span>Thank you!</span>Our manager will contact you in 5 min.
        </div>
    </div>
  )
}

export default Buyed