"use client"

import styles from '../styles/main.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';

import { useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV === 'development') { //dev mode only
  loadDevMessages();
  loadErrorMessages();
}

export default function Main({general, gqlQuery}) {

  const [modalVisible, setModalVisible] = useState(true);
  const { data } =  useQuery(gqlQuery);
  const firstKey = data ? Object.keys(data)[0] : null;
  const list = firstKey ? data[firstKey] : [];


  useEffect(() => {
    const isModalShown = sessionStorage.getItem('isModalShown');
    if (isModalShown) {
      setModalVisible(false);
    } else {
      setModalVisible(true);
    }
  }, []);

  function hideModal(){
    setModalVisible(false);
    sessionStorage.setItem('isModalShown', 'true');
  }

  return (
    <div className={styles.wrapp}>
     
      {modalVisible && <Modal hide={hideModal} />}

      {/* {general.map(gen => (  using with sql*/}
      {list.map((gen, index) => (
        <Link 
        importance="high"
        rel="preload"   
        key={index}  
        // href={gen.type} 
        href={gen.name} 
        // className={`${styles.part} ${gen.id === 1 ? styles.background1 : styles.background2}`}
        className={`${styles.part} ${gen.id === '6585aec47ebe3fec296f7fa1' ? styles.background1 : styles.background2}`}
        >
          {/* <span>{gen.type}</span> */}
          <span>{gen.name}</span>
        </Link>
      ))}

  </div>
  );
}




 
