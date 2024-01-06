"use client"

import styles from '../styles/menusm.module.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {useAuth} from '../hooks/useAuth';
import { useEffect, useState } from 'react';

const MenuSM = ({onClick}) => {

    const {isAuth, email} = useAuth();
    const basket= useSelector((state)=>state.basket.basket);
    const [visible, setVisible] = useState(false);

    const handleToggleMenu = () => {
      setVisible((prevVisible) => !prevVisible);
      if (onClick && typeof onClick === 'function') {
        onClick(); 
      }
    };

  return (
    
<div
  className={styles.right_sm}
  style={{
    visibility: visible ? 'visible' : 'hidden',
    opacity: visible ? '1' : '0',
    transition: 'visibility 0.3s, opacity 0.3s ease-in-out'
  }}
> 
  <button className={styles.close} onClick={handleToggleMenu}>X</button>  
   {isAuth ? 
    <>
      <div className={styles.name}> <span>Hello</span>  <Link href='/user' className={styles.link}>{email}</Link> </div>
    </>: null}
  <Link href='/' className={styles.logo}/>
  <Link href='/auth' className={styles.user}/>
  <Link href='/basket' className={styles.basket}>
        {basket.length ? <span className='basket_quantity'>{basket.length}</span> : null }
  </Link>
  </div>

  )
}

export default MenuSM