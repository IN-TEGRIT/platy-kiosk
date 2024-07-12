/* import styles from "./PayMethod.module.css"; */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Paying = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/payingEnd');
    }, 5000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div >
      <img  alt="" src="/paying.png" />
    </div>
  );
};

export default Paying;
