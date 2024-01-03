import styles from '../styles/confirmPage.module.scss';
import ConfirmForm from '../components/ConfirmForm';
import ConfirmList from '../components/ConfirmList';

export default function Confirm(){
   
    return (
    <div className={styles.wrapp}>
        <ConfirmList/>
        <ConfirmForm/>
    </div>
    )
}