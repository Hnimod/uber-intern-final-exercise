import { LatLngExpression } from 'leaflet';
import { Marker } from 'react-leaflet';
import { ICoordinate } from '../../../features/booking/bookingSlice';

interface Props {
  position: ICoordinate;
}

const PickupMarker = ({ position }: Props) => {
  const mapPosition: LatLngExpression = [position.lat, position.lng];

  return <Marker position={mapPosition}>Your pick up</Marker>;
};

export default PickupMarker;
