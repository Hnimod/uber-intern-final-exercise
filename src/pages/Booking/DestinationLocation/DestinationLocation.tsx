import { useEffect, useState } from 'react';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { IoIosSquare } from 'react-icons/io';
import { FaSistrix } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { RiSuitcaseLine } from 'react-icons/ri';
import styles from './DestinationLocation.module.scss';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  changeStepToPickup,
  selectBookingDestination,
} from '../../../features/booking/bookingSlice';

import restaurant1 from '../../../images/restaurant-1.jpg';
import restaurant2 from '../../../images/restaurant-2.jpg';
import friend1 from '../../../images/Minh-Avatar.jpg';
import { BackButton, PrimaryButton } from '../../../shared/Buttons';
import Location from './Location';
import InputSuggestions, { ISuggestion } from './InputSuggestions';

interface Props {
  className?: string;
}

const DestinationLocation = ({ className }: Props) => {
  const dispatch = useAppDispatch();
  const [suggestData, setSuggestData] = useState<ISuggestion[]>([]);
  const provider = new OpenStreetMapProvider();
  const destination = useAppSelector(selectBookingDestination);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (destination) {
        const results = await provider.search({ query: destination });
        const suggestions: ISuggestion[] = results.map((location) => {
          return {
            name: location.label,
            coordinate: {
              lat: location.y,
              lng: location.x,
            },
          };
        });
        setSuggestData(suggestions);
      } else setSuggestData([]);
    }, 300);

    return () => clearTimeout(timer);
    //eslint-disable-next-line
  }, [destination]);

  return (
    <section className={`${styles.destinationsBox} ${className}`}>
      <div className={styles.inputField}>
        <IoIosSquare className={styles.squareIcon} />
        <InputSuggestions
          suggestions={suggestData}
          placeholder="Where you would like to go?"
        />
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

      <h4>Nearby Restaurant</h4>
      <div className={styles.nearbyPlaces}>
        <figure className={styles.place}>
          <img src={restaurant1} alt="restaurant 1" />
          <figcaption>
            Grandiose Restaurant <address>Airport Road Khilkhet, 1229</address>
          </figcaption>
        </figure>

        <figure className={styles.place}>
          <img src={restaurant2} alt="restaurant 2" />
          <figcaption>
            Grandiose Restaurant <address>Airport Road Khilkhet, 1229</address>
          </figcaption>
        </figure>
      </div>

      <h4>Friends nearby you</h4>
      <ul className={styles.nearbyFriends}>
        <figure className={styles.friend}>
          <img src={friend1} alt="restaurant 2" />
          <figcaption>
            Minh Do <address>Etown 3</address>
          </figcaption>
        </figure>

        <figure className={styles.friend}>
          <img src={friend1} alt="restaurant 2" />
          <figcaption>
            Minh Do <address>Etown 3</address>
          </figcaption>
        </figure>

        <figure className={styles.friend}>
          <img src={friend1} alt="restaurant 2" />
          <figcaption>
            Minh Do <address>Etown 3</address>
          </figcaption>
        </figure>
      </ul>

      <div className={styles.buttons}>
        <BackButton onClick={() => dispatch(changeStepToPickup())}>
          Back
        </BackButton>
        <PrimaryButton onClick={() => {}}>Next</PrimaryButton>
      </div>
    </section>
  );
};

export default DestinationLocation;
