import { useEffect, useState } from 'react';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { IoIosSquare } from 'react-icons/io';
import { FaSistrix } from 'react-icons/fa';
import styles from './PickupLocation.module.scss';

import { useAppSelector } from '../../../app/hooks';
import { selectBookingPickup } from '../../../features/booking/bookingSlice';

import { PrimaryButton, BackButton } from '../../../shared/Buttons';
import Location from './Location';
import InputSuggestions, { ISuggestion } from './InputSuggestions';

interface Props {
  className?: string;
}

const Booking = ({ className }: Props) => {
  const [suggestData, setSuggestData] = useState<ISuggestion[]>([]);
  const provider = new OpenStreetMapProvider();
  const pickup = useAppSelector(selectBookingPickup);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (pickup) {
        const results = await provider.search({ query: pickup });
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
  }, [pickup]);

  return (
    <section className={`${styles.destinationsBox} ${className}`}>
      <div className={styles.inputField}>
        <IoIosSquare className={styles.squareIcon} />
        <InputSuggestions
          suggestions={suggestData}
          placeholder="Your pick up location?"
        />
        <FaSistrix className={styles.magnifingGlass} />
      </div>
      <ul className={styles.resultsList}>
        <Location
          name="Current location"
          address="Your current location"
          current
          coordinate={{ lng: 108.4375758, lat: 11.9402416 }}
        />
        <Location
          name="Hanoi"
          address="Hanoi, Vietnam"
          coordinate={{ lng: 105.8544441, lat: 21.0294498 }}
        />
        <Location
          name="Ho Chi Minh City"
          address="Ho Chi Minh City, Vietnam"
          coordinate={{ lng: 106.7017555, lat: 10.7758439 }}
        />
      </ul>
      <div className={styles.buttons}>
        <BackButton>Back</BackButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </div>
    </section>
  );
};

export default Booking;
