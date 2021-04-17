import React, { useState } from 'react';
import { useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import styles from './InputSuggestions.module.scss';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  selectBookingPickup,
  ICoordinate,
  changePickup,
  changePickupMarker,
} from '../../../../features/booking/bookingSlice';

export interface ISuggestion {
  name: string;
  coordinate: ICoordinate;
}

interface Props {
  suggestions: ISuggestion[];
  placeholder?: string;
}

const SearchSuggestion = ({ placeholder, suggestions }: Props) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useAppDispatch();
  const pickup = useAppSelector(selectBookingPickup);
  const map = useMap();

  const closeSuggestions = () => {
    setShowSuggestions(false);
  };

  const openSuggestions = () => {
    setShowSuggestions(true);
  };

  const choseSuggestion = (name: string, coordinate: ICoordinate) => {
    closeSuggestions();
    dispatch(changePickup(name));
    dispatch(changePickupMarker(coordinate));
    const mapPosition: LatLngExpression = [coordinate.lat, coordinate.lng];
    map.flyTo(mapPosition).getZoom();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePickup(e.target.value));
  };

  return (
    <div className={styles.container}>
      <input
        placeholder={placeholder}
        autoComplete="off"
        onFocus={openSuggestions}
        onChange={(e) => onInputChange(e)}
        value={pickup as string}
      />
      {showSuggestions && (
        <ul>
          {suggestions.map((item: ISuggestion, index) => (
            <li
              key={index}
              onClick={() => choseSuggestion(item.name, item.coordinate)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchSuggestion;
