/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';


export default function Map(props) {
  const [viewport, setViewport] = useState({
    latitude: 53.906177,
    longitude: 27.554801,
    zoom: 10,
    width: '100%',
    height: '500px',
    mapboxApiAccessToken: 'pk.eyJ1IjoiaGhoMTM2MSIsImEiOiJjanlzYzQ5Y28waXRmM2JxZHhjNTRpaWVkIn0.1NlMRoyK2zoN8VMyGUx2ww',
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedLocation(null);
      }
    };
    // eslint-disable-next-line no-undef
    window.addEventListener('keydown', listener);
    // eslint-disable-next-line no-undef
    return () => window.removeEventListener('keydown', listener);
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        // eslint-disable-next-line no-shadow
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/hhh1361/cjyscupqd0gp31coac4osfz7j"
      >
        {props.author.geolocation.map(location => (
          <Marker
            key={location.id}
            latitude={location.latitude}
            longitude={location.longitude}
          >
            <button
              type="button"
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedLocation(location);
              }}
            />
          </Marker>
        ))}

        {selectedLocation ? (
          <Popup
            latitude={selectedLocation.latitude}
            longitude={selectedLocation.longitude}
            onClose={() => {
              setSelectedLocation(null);
            }}
          >
            <div>
              {selectedLocation.description}
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}