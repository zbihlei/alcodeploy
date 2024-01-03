"use client"
import Admin from '../components/Admin'
import Customer from '../components/Customer';
import { useAuth } from '../hooks/useAuth';

const User = () => {
  const { email } = useAuth();

  let componentToShow = null;

  if (typeof window !== 'undefined') {
    if (email === 'admin@mail.com') {
      componentToShow = <Admin />;
    } else {
      componentToShow = <Customer />;
    }
  }

  return (
    <>
      {componentToShow}
    </>
  );
}

export default User;
