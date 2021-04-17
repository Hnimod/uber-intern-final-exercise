import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Booking.module.scss';

import { useAppSelector } from '../../app/hooks';
import {
  selectBookingStep,
  selectBookingPickupMarker,
  selectBookingDestinationMarker,
  BookingSteps,
} from '../../features/booking/bookingSlice';

import MainLayout from '../../layouts/MainLayout';
import PickupLocation from './PickupLocation';
import PickupMarker from './PickupMarker';
import DestinationLocation from './DestinationLocation';
import DestinationMarker from './DestinationMarker';

const Booking = () => {
  const pickupMarker = useAppSelector(selectBookingPickupMarker);
  const destinationMarker = useAppSelector(selectBookingDestinationMarker);
  const step = useAppSelector(selectBookingStep);

  const renderBookingStep = (step: number) => {
    switch (step) {
      case BookingSteps.PickUp:
        return <PickupLocation className={styles.locationForm} />;
      case BookingSteps.Destination:
        return <DestinationLocation className={styles.locationForm} />;
      case BookingSteps.Summary:
        return;
      default:
        throw new Error('Unhandle booking step');
    }
  };

  return (
    <MainLayout>
      <main>
        <MapContainer
          className={styles.mapContainer}
          center={[21.03812, 105.83461]}
          zoom={12}
          scrollWheelZoom={true}
          zoomControl={false}
        >
          {renderBookingStep(step)}
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {!!pickupMarker && <PickupMarker position={pickupMarker} />}
          {!!destinationMarker && (
            <DestinationMarker position={destinationMarker} />
          )}
        </MapContainer>
      </main>
    </MainLayout>
  );
};

export default Booking;
