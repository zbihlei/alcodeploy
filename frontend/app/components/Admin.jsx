import styles from '../styles/user.module.scss';

// import {BASE_URL} from '../utils/constants';
import {LOCAL_HOST} from '../utils/constants';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { useState,  useEffect } from 'react';
import { useDispatch } from "react-redux";
import {useAuth} from '../hooks/useAuth';

// import { getAllOrders } from '../services/getData';
// import { setupStatus } from '../services/getData';
import {removeUser} from '../slices/userSlice';

import {GET_ALL_ORDERS} from '../queries/queries';
import { UPDATE_ORDER_STATUS } from '../mutations/mutations';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV === 'development') { //dev mode only
  loadDevMessages();
  loadErrorMessages();
}

const Admin = () => {

    const { data, refetch } =  useQuery(GET_ALL_ORDERS);
    const firstKey = data ? Object.keys(data)[0] : null;
    const list = firstKey ? data[firstKey] : [];
         
    const [updateOrderStatus]= useMutation(UPDATE_ORDER_STATUS);

    // const [orders, setOrders] = useState([]);
    // const [statusUpdated, setStatusUpdated] = useState(false);
    const {email, isAuth} = useAuth();
    const dispatch = useDispatch();
    const router = useRouter();

    if(!isAuth) router.push('/auth');

    // useEffect(()=>{
    //  getAllOrders().then(res => setOrders(res));
    //   setStatusUpdated(false);
    // },[email]);

    // const handleSubmit = (id, value) => {
    //   const url = `${BASE_URL}/orders`;
    //   const data = JSON.stringify({ status: value });
    
    //   setupStatus(url, id, data)
    //     .then(() => {
    //       setOrders(prevOrders =>
    //         prevOrders.map(order => (order.id === id ? { ...order, status: value } : order))
    //       );
    //       setStatusUpdated(true);
    //     })
    //     .catch(error => console.error('Error:', error.message));
    // }; 


    const handleSubmit = async (id, value) => {

      try {
        const { data } = await updateOrderStatus({
          variables: {
           orderId: id, 
           newStatus: value 
          },
        });
         refetch();
    
      } catch (error) {
        console.error('Failed to update order:', error);
      }
    }; 

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
       {/* {orders.length ? 
       <>   
            {orders.slice().reverse().map((item, index)=>(
          <div key={item.id}  className={styles.link} href={''}>
            {index === 0 || item.date !== orders[index - 1].date ? (
                <>
                <div className={styles.time}>
                    <span>{item.date}</span>
                </div>
                     <div className={styles.adminWrapp}>
                     <span style={{textTransform: 'capitalize'}}>{item.firstname}</span>
                     <span style={{textTransform: 'capitalize'}}>{item.surname}</span>
                     <span>{item.phone}</span>
                     <span>{item.email}</span>
                 </div>
                 </>
            ) : null}
           
             <Link href={`${LOCAL_HOST}${item.path}`} style={{textDecoration: 'none'}}>
                <div className={styles.item}  style={{
                       backgroundColor: item.status === 'processed' ? 'rgb(242, 30, 168, 0.5)' : (item.status === 'cancelled' ? 'rgb(140, 134, 138, 0.5)' : ''),
                       color: item.status === 'processed' ||  'cancelled' ? 'black' : '' 

                }}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.type}>{item.type}</div>
                  <div className={styles.image}>            
                    <img src={item.image} alt="image"/>
                  </div>
                  {item.volume ? <div className={styles.volume}>{item.volume}L</div> : <div className={styles.volume}>STANDART</div>}
                  <div className={styles.price}>{item.price} <span style={{fontSize: '14px'}}>₴</span> </div>
                  <div className={styles.status}>{item.status}</div>
                </div>
            </Link>

            <div className={styles.buttonsAdmin}>
                <button onClick={()=>handleSubmit(item.id, 'processed')} className={styles.adminBtn}>processed</button>
                <button onClick={()=>handleSubmit(item.id, 'cancelled')} className={styles.adminBtn}>cancelled</button>
            </div>
          </div>

              ))}
        </> : 
        <div className={styles.text}>No orders yet...</div>
      } */}

      {list.length ? (
        <>
          {list.slice().reverse().map((item, index) => (
            <div key={item._id} className={styles.link} href={''}>
              <>
                <div className={styles.time}>
                  <span>{item.date.replace(/ GMT\+\d{4} \(за східноєвропейським стандартним часом\)/, '')}</span>
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
                  <button onClick={() => handleSubmit(item._id, 'processed')} className={styles.adminBtn}>processed</button>
                  <button onClick={() => handleSubmit(item._id, 'cancelled')} className={styles.adminBtn}>cancelled</button>
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

export default Admin