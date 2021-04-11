import { IoIosSquare } from 'react-icons/io';
import { FaSistrix } from 'react-icons/fa';

import BackgroundImage from '../../layouts/BackgroundImage';
import Location from './Location';

import styles from './FindLocation.module.scss';

const Booking = () => {
  return (
    <BackgroundImage>
      <section className={styles.destinationsBox}>
        <div className={styles.inputField}>
          <IoIosSquare className={styles.squareIcon} />
          <input placeholder="Where to ?" />
          <FaSistrix className={styles.magnifingGlass} />
        </div>
        <ul className={styles.resultsList}>
          <Location
            name="Bdlive24.com"
            address="Hourse 57, road-8, Block-D, niketon, Gulshan"
          />
          <Location
            name="Bdlive24.com"
            address="Hourse 57, road-8, Block-D, niketon, Gulshan"
          />
          <Location
            name="Bdlive24.com"
            address="Hourse 57, road-8, Block-D, niketon, Gulshan"
          />
          <Location
            name="Bdlive24.com"
            address="Hourse 57, road-8, Block-D, niketon, Gulshan"
          />
        </ul>
      </section>
    </BackgroundImage>
  );
};

export default Booking;
