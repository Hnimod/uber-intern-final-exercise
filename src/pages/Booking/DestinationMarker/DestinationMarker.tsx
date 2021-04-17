import { LatLngExpression } from 'leaflet';
import { useMap, Marker } from 'react-leaflet';
import { ICoordinate } from '../../../features/booking/bookingSlice';

interface Props {
  position: ICoordinate;
}

const PickupMarker = ({ position }: Props) => {
  console.log(position);
  const mapPosition: LatLngExpression = [position.lat, position.lng];
  const map = useMap();
  map.flyTo(mapPosition).getZoom();

  return <Marker position={mapPosition}>Your pick up</Marker>;
};

export default PickupMarker;
