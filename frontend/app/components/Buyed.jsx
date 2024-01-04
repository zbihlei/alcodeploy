"use client"
import styles from '../styles/buyed.module.scss';
import { useRouter } from 'next/navigation'; 
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Buyed = () => {
  const basket = useSelector((state) => state.basket.basket);
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/');
    }, 4000);

    return () => clearTimeout(redirectTimeout);
  }, [router, basket]);

  return (
    <div className={styles.wrapp}>
      <div className={styles.text}>
        <span>Thank you!</span> Our manager will contact you in 5 min.
      </div>
    </div>
  );
};

export default Buyed;
