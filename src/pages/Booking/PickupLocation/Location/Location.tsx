import { useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { MdLocationOn } from 'react-icons/md';
import styles from './Location.module.scss';

import {
  ICoordinate,
  changePickupMarker,
} from '../../../../features/booking/bookingSlice';
import { useAppDispatch } from '../../../../app/hooks';

interface Props {
  name: string;
  address: string;
  coordinate: ICoordinate;
  current?: boolean;
}

const Location = ({ name, address, coordinate, current }: Props) => {
  const dispatch = useAppDispatch();
  const map = useMap();

  const onLocationClick = () => {
    if (!current) {
      dispatch(changePickupMarker(coordinate));
      const mapPosition: LatLngExpression = [coordinate.lat, coordinate.lng];
      map.flyTo(mapPosition).getZoom();
    } else {
      map.locate();
      map.addEventListener('locationfound', (e) => {
        const newCoordinate: ICoordinate = {
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        };
        dispatch(changePickupMarker(newCoordinate));
        map.flyTo(e.latlng).getZoom();
      });
      map.addEventListener('locationerror', () => {
        alert('Unable to find your location');
      });
    }
  };

  return (
    <li className={styles.location} onClick={onLocationClick}>
      <MdLocationOn />
      <div>
        <h5>{name}</h5>
        <address>{address}</address>
      </div>
    </li>
  );
};

export default Location;
