import { LatLngExpression } from 'leaflet';
import { useMap } from 'react-leaflet';
import styles from './Restaurant.module.scss';

import {
  ICoordinate,
  changeDestinationMarker,
  changeDestination,
} from '../../../../features/booking/bookingSlice';
import { useAppDispatch } from '../../../../app/hooks';

interface Props {
  image: string;
  name: string;
  address: string;
  alt: string;
  coordinate: ICoordinate;
}

const Restaurant = ({ image, name, address, alt, coordinate }: Props) => {
  const dispatch = useAppDispatch();
  const map = useMap();
  const onLocationClick = () => {
    dispatch(changeDestinationMarker(coordinate));
    dispatch(changeDestination(address));
    const mapPosition: LatLngExpression = [coordinate.lat, coordinate.lng];
    map.flyTo(mapPosition).getZoom();
  };

  return (
    <figure className={styles.place} onClick={onLocationClick}>
      <img src={image} alt={alt} />
      <figcaption>
        {name} <address>{address}</address>
      </figcaption>
    </figure>
  );
};

export default Restaurant;
