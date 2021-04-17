import { IoIosSquare } from 'react-icons/io';
import { FaSistrix } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { RiSuitcaseLine } from 'react-icons/ri';

import restaurant1 from '../../images/restaurant-1.jpg';
import restaurant2 from '../../images/restaurant-2.jpg';

import BackgroundImage from '../../../layouts/BackgroundImage';
import Location from './Location';

import styles from './DestinationLocation.module.scss';

const Booking = () => {
  return (
    <BackgroundImage>
      <section className={styles.destinationsBox}>
        <div className={styles.inputField}>
          <IoIosSquare className={styles.squareIcon} />
          <input placeholder="Where would you like to go?" />
          <FaSistrix className={styles.magnifingGlass} />
        </div>

        <ul className={styles.resultsList}>
          <Location
            Icon={RiSuitcaseLine}
            name="Office"
            address="BDlive24, Road 8 Niketon, gulshan, 1000"
          />
          <Location
            Icon={AiOutlineHome}
            name="Home"
            address="BDlive24, Road 8 Niketon, gulshan, 1000"
          />
        </ul>

        <div className={styles.nearbyPlaces}>
          <h4>Nearby Restaurant</h4>
          <figure className={styles.place}>
            <img src={restaurant1} alt="restaurant 1" />
            <figcaption>
              Grandiose Restaurant{' '}
              <address>Airport Road Khilkhet, 1229</address>
            </figcaption>
          </figure>

          <figure className={styles.place}>
            <img src={restaurant2} alt="restaurant 2" />
            <figcaption>
              Grandiose Restaurant{' '}
              <address>Airport Road Khilkhet, 1229</address>
            </figcaption>
          </figure>
        </div>

        <ul className={styles.nearbyFriend}>
          <h4>Friend nearby you</h4>
        </ul>
      </section>
    </BackgroundImage>
  );
};

export default Booking;
