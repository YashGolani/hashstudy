import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = ({ setLat, setLong }) => {
  const [currentPosition, setCurrentPosition] = useState({});

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const currentPosition = {
      lat: latitude,
      lng: longitude,
    };
    setCurrentPosition(currentPosition);
  };

  const mapStyles = () => {
    return {
      marginTop: "-20px",
      height: "100vh",
      width: "100%",
    };
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyCjhuvbH4luWKGnjHJDF2lVJHy4rBUk5bk"
      >
        <GoogleMap
          id="example-map"
          mapContainerStyle={mapStyles()}
          draggable={true}
          zoom={13}
          center={currentPosition.lat ? currentPosition : defaultCenter}
          onClick={(e) => {
            setLat(e.latLng.lat());
            setLong(e.latLng.lng());
          }}
        ></GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapContainer;
