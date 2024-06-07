import { useState } from 'react';
import * as styles from './App.module.scss';
import pic1 from '@/assets/1.png';
import pic2 from '@/assets/2.jpg';
import Icon from '@/assets/3.svg';
import Navbar from '@/components/Navbar/Navbar';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <Navbar />
      <div>
        <img src={pic1} alt="" width={100} height={100} />
        <img src={pic2} alt="" width={100} height={100} />
      </div>
      <div>
        <Icon width={200} height={200} />
      </div>
      <div className={styles.counter}>{count}</div>
      <button className={styles.button} onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default App;
