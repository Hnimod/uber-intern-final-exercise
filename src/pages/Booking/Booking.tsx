import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Booking.module.scss';

import { useAppSelector } from '../../app/hooks';
import { selectBookingPickupMarker } from '../../features/booking/bookingSlice';

import MainLayout from '../../layouts/MainLayout';
import PickupLocation from './PickupLocation';
import PickupMarker from './PickupMarker';

const Booking = () => {
  const pickupMarker = useAppSelector(selectBookingPickupMarker);

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
          <PickupLocation className={styles.pickupForm} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {!!pickupMarker && <PickupMarker position={pickupMarker} />}
        </MapContainer>
      </main>
    </MainLayout>
  );
};

export default Booking;
