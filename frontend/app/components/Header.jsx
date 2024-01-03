"use client"

import Link from 'next/link';
import { useSelector } from 'react-redux';
import Search from '../components/Search';
import {useAuth} from '../hooks/useAuth';
import styles from '../styles/main.module.scss';

const Header = ({onHeaderClick}) => {

  const {isAuth, email} = useAuth();
  const basket= useSelector((state)=>state.basket.basket);

  const handleClick =(e)=>{
    onHeaderClick(e);
  }

  return (
    <header>
    <div className='left'>
      <Link href='/' className='logo'/>
      <Search/>
    </div>

    <div className='right'>

    {isAuth ? 
      <>
        <div className={styles.name}>Hello <Link href='/user' className={styles.link}>{email}</Link> </div>
      </>: null}

    <Link href='/auth' className='user'/>
    <Link href='/basket' className='basket'>
          {basket.length ? <span className='basket_quantity'>{basket.length}</span> : null }
     </Link>
    </div>

      <button onClick={(e) => handleClick(e)} className={styles.burger}><span></span></button>
     </header>
  )
}

export default Header