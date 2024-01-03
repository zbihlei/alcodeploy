"use client"
import { useEffect, useState, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBasket } from '../slices/basketSlice';
import Link from 'next/link';
import { LOCAL_HOST } from '../utils/constants';
// import { searchByName } from '../services/getData';
import { useDebounce } from '../hooks/useDebounce';
import styles from '../styles/search.module.scss';

import { useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { SEARCH_BY_NAME } from '../queries/queries';

if (process.env.NODE_ENV === 'development') { //dev mode only
  loadDevMessages();
  loadErrorMessages();
}

const Search = () => {

  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState([]);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [isSearching, setIsSearching] = useState(false);
  
// debounced search val
  // const debouncedSetFilter = useDebounce((value) => {
  //   setFilter(value);
  // }, 700);

  // const Search = (e) =>{
  //   const value = e.target.value;
  //   debouncedSetFilter(value);
  // }

  const debouncedSetFilter = useDebounce(

    (value) => {
      if (value.trim() === '') {
        setIsSearching(false);
      } else {
        setFilter(value);
      }
    },
    1000,
    true 
  );
  
  const Search = (e) => {
    const value = e.target.value;
    debouncedSetFilter(value);
    if (value.trim() !== '') {
      setIsSearching(true);
    }
  };


 // when we go Link basket state is saved 
  const memoizedBasket = useMemo(() => {
    return basket.map(item => ({ ...item }));
  }, [basket]);

  const handleCLick = ()=>{
    
    setIsSearching(false); // only for graph

    setSearch([]);
    setFilter('');
    const newBasket = [...memoizedBasket];
    dispatch(updateBasket(newBasket));
  }

  const { data } = useQuery(SEARCH_BY_NAME, {
    variables: { name: filter },
  });

  useEffect(() => {
    if (isSearching && data && data.searchByName) {
      const flatSearchResults = Object.values(data.searchByName)
        .flat()
        .filter((el) => el);
  
      setSearch(flatSearchResults);
    } else {
      setSearch([]);
    }
  }, [data, filter, isSearching]);

  // useEffect(() => {
  //   if (filter.trim() !== '') {
  //     searchByName(filter).then((res) => {
  //       setSearch(res);
  //     });
  //   } else {
  //     setSearch([]);
  //   }
  // }, [filter]);

  // return (
  //   <div className={styles.wrapp}>
  //       <div className={styles.searchhead}>today  I <span>want</span>...</div>
  //   <input onChange={Search} type="search" className={styles.searchfield} />
  //   {search.length > 0 ? 
  //      <div className={`${styles.searchbox} ${styles.scrollable}`}>
  //        {search.map((el)=>(

  //         <Link href={`${LOCAL_HOST}/${el.type}/${el.subtype}/${el.id}`} className={styles.searchel} key={el.id} onClick={()=>{handleCLick()}}>
  //           <div className={styles.image} style={{ backgroundImage: `url(${el.image})`}}/>
  //           <div className={styles.name}>{el.name}</div>
  //         </Link>
  //         ))}
  //      </div> : null}
  //   </div>
  // )
  return (
    <div className={styles.wrapp}>
      <div className={styles.searchhead}>today I <span>want</span>...</div>
      <input
        onChange={Search}
        type="search"
        className={styles.searchfield}
        ref={inputRef}
      />
      {search.length > 0 && (
      <div className={`${styles.searchbox} ${styles.scrollable}`}>
        {search.map((el) => (
          el._id && (
            <Link
              href={`${LOCAL_HOST}/${el.type}/${el.subtype}/${el._id}`}
              className={styles.searchel}
              key={el._id}
              onClick={() => {
                handleCLick();
                inputRef.current.value = '';
              }}
            >
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${el.image})` }}
              />
              <div className={styles.name}>{el.name}</div>
            </Link>
          )
        ))}
      </div>
)}
    </div>
  );
}

export default Search