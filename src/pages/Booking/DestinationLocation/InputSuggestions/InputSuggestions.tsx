import React, { useState } from 'react';
import { LatLngExpression } from 'leaflet';
import { useMap } from 'react-leaflet';
import { MdClose } from 'react-icons/md';
import styles from './InputSuggestions.module.scss';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  selectBookingDestination,
  ICoordinate,
  changeDestination,
  changeDestinationMarker,
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
  const destination = useAppSelector(selectBookingDestination);
  const map = useMap();

  const closeSuggestions = () => {
    setShowSuggestions(false);
  };

  const openSuggestions = () => {
    setShowSuggestions(true);
  };

  const choseSuggestion = (name: string, coordinate: ICoordinate) => {
    closeSuggestions();
    dispatch(changeDestination(name));
    dispatch(changeDestinationMarker(coordinate));
    const mapPosition: LatLngExpression = [coordinate.lat, coordinate.lng];
    map.flyTo(mapPosition).getZoom();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeDestination(e.target.value));
  };

  const clearSearch = () => {
    dispatch(changeDestination(''));
    dispatch(changeDestinationMarker(null));
  };

  return (
    <div className={styles.container}>
      <input
        placeholder={placeholder}
        autoComplete="off"
        onFocus={openSuggestions}
        onChange={(e) => onInputChange(e)}
        value={destination as string}
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
      {!!destination && <MdClose onClick={clearSearch} />}
    </div>
  );
};

export default SearchSuggestion;
