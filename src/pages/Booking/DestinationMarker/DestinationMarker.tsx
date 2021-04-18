import { LatLngExpression } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { ICoordinate } from '../../../features/booking/bookingSlice';

interface Props {
  position: ICoordinate;
}

const PickupMarker = ({ position }: Props) => {
  const mapPosition: LatLngExpression = [position.lat, position.lng];

  return (
    <Marker position={mapPosition}>
      <Popup>Your destination</Popup>
    </Marker>
  );
};

export default PickupMarker;
