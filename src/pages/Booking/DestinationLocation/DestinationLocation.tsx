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
  changeStepToSummary,
  selectBookingDestination,
} from '../../../features/booking/bookingSlice';

import restaurant1 from '../../../images/restaurant-1.jpg';
import restaurant2 from '../../../images/restaurant-2.jpg';
import friend1 from '../../../images/minh-avatar-square.png';
import friend2 from '../../../images/friend-male.png';
import friend3 from '../../../images/friend-female.png';
import { BackButton, PrimaryButton } from '../../../shared/Buttons';
import Location from './Location';
import InputSuggestions, { ISuggestion } from './InputSuggestions';
import Restaurant from './Restaurant';
import Friend from './Friend';

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
          address="Etown 3, Ap Bac, 13 ward, Tan Binh, HCMC"
          coordinate={{ lng: 106.64135, lat: 10.80163 }}
        />
        <Location
          Icon={AiOutlineHome}
          name="Home"
          address="180/48, XVNT, 21 ward, Binh Thanh, HCMC"
          coordinate={{ lng: 106.71219, lat: 10.79766 }}
        />
      </ul>

      <h4>Nearby Restaurant</h4>
      <div className={styles.nearbyPlaces}>
        <Restaurant
          name="Sorae Restaurant & Lounge"
          image={restaurant1}
          address="AB Tower, 76A Le Lai, HCMC"
          alt="restaurant 1"
          coordinate={{ lng: 106.69445, lat: 10.77069 }}
        />

        <Restaurant
          name="Moo Beef Steak Prime"
          image={restaurant2}
          address="36 Ngo Duc Ke, Ben Nghe, HCMC"
          alt="restaurant 2"
          coordinate={{ lng: 106.7056, lat: 10.77333 }}
        />
      </div>

      <h4>Friends nearby you</h4>
      <ul className={styles.nearbyFriends}>
        <Friend
          name="Minh Do"
          image={friend1}
          address="Etown 3"
          alt="friend 1"
          coordinate={{ lng: 106.64135, lat: 10.80163 }}
        />
        <Friend
          name="Nam Vu"
          image={friend2}
          address="Phu My Hung"
          alt="friend 2"
          coordinate={{ lng: 106.7202, lat: 10.73071 }}
        />
        <Friend
          name="Bao Anh"
          image={friend3}
          address="Tan Son Nhat"
          alt="friend 3"
          coordinate={{ lng: 106.65931, lat: 10.8183 }}
        />
      </ul>

      <div className={styles.buttons}>
        <BackButton onClick={() => dispatch(changeStepToPickup())}>
          Back
        </BackButton>
        <PrimaryButton
          onClick={() => {
            if (destination) {
              dispatch(changeStepToSummary());
            }
          }}
          disabled={!!!destination}
        >
          Next
        </PrimaryButton>
      </div>
    </section>
  );
};

export default DestinationLocation;
