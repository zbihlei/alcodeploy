import styles from '../styles/modal.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Modal({hide}) {

    const router = useRouter();

  return (
    <div className={styles.overlay}>
    <div className={styles.wrapp}>
        <div className={styles.text}>
            Are you over 18 yet?
        </div>
        <div className={styles.buttons}>
            <Link className={styles.btn} style={{textDecoration: 'none'}} onClick={hide} href='/'>Yep</Link>
            <button className={styles.btn} onClick={() => router.back()}>Nope</button>
        </div>
    </div>
    </div>
  )
}

export default Modal