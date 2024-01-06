import styles from '../styles/user.module.scss';
import {useAuth} from '../hooks/useAuth';
import { useDispatch } from "react-redux";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {removeUser} from '../slices/userSlice';
import { LOCAL_HOST } from '../utils/constants';

import { useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { GET_ORDERS_BY_EMAIL } from '../queries/queries';

if (process.env.NODE_ENV === 'development') { //dev mode only
  loadDevMessages();
  loadErrorMessages();
}

const Customer = () => {

    const {email, isAuth} = useAuth();
    const dispatch = useDispatch();
    const router = useRouter();

    if(!isAuth) router.push('/auth');


    const { data } = useQuery(GET_ORDERS_BY_EMAIL, {
      variables: { email: email },
    });
    const firstKey = data ? Object.keys(data)[0] : null;
    const list = firstKey ? data[firstKey] : [];

    const calculateTotalPrice = (basket) => {
      return basket.reduce((total, item) => total + item.price * item.quantity, 0);
    };
        
  return (
    <div className={styles.wrapp}>
      <div className={styles.top}>
      <h5>hello {email}</h5>
        <button onClick={()=>dispatch(removeUser())}>Log out</button>
      </div>
        <h6>Orders history</h6>

    <div className={styles.ordersWrapp}>
    {list.length ? (
        <>
          {list.slice().reverse().map((item, index) => (
            <div key={item._id} className={styles.link} href={''}>
              <>
                <div className={styles.time}>
                  <span>{item.date}</span>
                </div>

                <div className={styles.adminWrapp}>
                  <span style={{ textTransform: 'capitalize' }}>{item.firstname}</span>
                  <span style={{ textTransform: 'capitalize' }}>{item.surname}</span>
                  <span>{item.phone}</span>
                  <span>{item.email}</span>
                  <div className={styles.status}>{item.status}</div>
                </div>

                {item.basket.map((itm, index) => (
                  <Link key={index} href={`${LOCAL_HOST}${itm.path}`} style={{ textDecoration: 'none' }}>
                    <div className={styles.item}>
                      <div className={styles.name}>{itm.name}</div>
                      <div className={styles.type}>{itm.type}</div>
                      <div className={styles.image}>
                        <img src={itm.image} alt="image" />
                      </div>
                      {itm.volume ? <div className={styles.volume}>{itm.volume}L</div> : <div className={styles.volume}>STANDART</div>}
                      <div className={styles.price}>{itm.price} <span style={{ fontSize: '14px' }}>₴</span> </div>
                    </div>
                  </Link>
                ))}
                  <div className={styles.buttonsAdmin}>
                  <div className={styles.total}>Total: {calculateTotalPrice(item.basket)} <span>₴</span> </div>
                </div>
              </>
            </div>
          ))}
        </>
      ) : (
        <div className={styles.text}>No orders yet...</div>
      )}
      </div>
    
    </div>
  )
}

export default Customer