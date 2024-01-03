import styles from '../styles/authForm.module.scss';
import { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const canEnableButton = () => {
    return email.trim() !== '' && password.trim() !== '';
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsButtonDisabled(!canEnableButton());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsButtonDisabled(!canEnableButton());
  };

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      handleClick(email, password);
    }
  };

  return (
    <div className={styles.formauth}>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="password"
      />
      <button onClick={handleButtonClick} disabled={isButtonDisabled}>
        {title}
      </button>

    </div>
  );
}

export { Form };
