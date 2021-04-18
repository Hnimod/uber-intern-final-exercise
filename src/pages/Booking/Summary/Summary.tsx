import { useHistory } from 'react-router-dom';
import { MdLocationOn, MdMyLocation } from 'react-icons/md';
import styles from './Summary.module.scss';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  selectBookingPickup,
  selectBookingDestination,
  changeStepToDestination,
  resetBooking,
} from '../../../features/booking/bookingSlice';

import Location from './Location';
import { BackButton, PrimaryButton } from '../../../shared/Buttons';

interface Props {
  className: string;
}

const Summary = ({ className }: Props) => {
  const pickup = useAppSelector(selectBookingPickup);
  const destination = useAppSelector(selectBookingDestination);
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <section className={`${styles.destinationsBox} ${className}`}>
      <Location Icon={MdLocationOn} name="From" address={pickup as string} />
      <Location Icon={MdMyLocation} name="To" address={destination as string} />
      <div className={styles.price}>
        <div className={styles.summary}>
          <h4>Prize: $9.76</h4>
          <p>Kilomets: 3.85km</p>
          <p>Time: 35minutes</p>
        </div>
        <details></details>
      </div>

      <div className={styles.buttons}>
        <BackButton onClick={() => dispatch(changeStepToDestination())}>
          Back
        </BackButton>
        <PrimaryButton
          onClick={() => {
            setTimeout(() => {
              alert('Booking successfully');
              dispatch(resetBooking());
              history.push('/');
            }, 500);
          }}
        >
          Confirm
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Summary;
