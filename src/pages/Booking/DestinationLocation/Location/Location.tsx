import { IconType } from 'react-icons/lib';
import { useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import styles from './Location.module.scss';

import {
  ICoordinate,
  changeDestinationMarker,
  changeDestination,
} from '../../../../features/booking/bookingSlice';
import { useAppDispatch } from '../../../../app/hooks';

interface Props {
  Icon: IconType;
  name: string;
  coordinate: ICoordinate;
  address: string;
}

const Location = ({ name, address, Icon, coordinate }: Props) => {
  const dispatch = useAppDispatch();
  const map = useMap();
  const onLocationClick = () => {
    dispatch(changeDestinationMarker(coordinate));
    dispatch(changeDestination(address));
    const mapPosition: LatLngExpression = [coordinate.lat, coordinate.lng];
    map.flyTo(mapPosition).getZoom();
  };

  return (
    <li className={styles.location} onClick={onLocationClick}>
      <Icon />
      <div>
        <h5>{name}</h5>
        <address>{address}</address>
      </div>
    </li>
  );
};

export default Location;
