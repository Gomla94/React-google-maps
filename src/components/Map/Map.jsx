import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocalActivityOutlined";
import Rating from "@material-ui/lab/Rating";
import restaurant from "../../images/rest-comp.jpg";
import Marker from "./Marker";

import useStyles from "./styles";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setSelectedChild,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
        }}
        onChildClick={(child) => {
          setSelectedChild(Number(child));
        }}
      >
        {places?.map((place, index) => (
          <Marker lat={place.latitude} lng={place.longitude} key={index}>
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : place.name ? (
              <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="subtitle2">
                  {place.name}
                </Typography>
                <img
                  alt={place.name}
                  src={place.photo ? place.photo.images.large.url : restaurant}
                />
                <Rating
                  name={place.name}
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            ) : (
              ""
            )}
          </Marker>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

{
  /* <div
className={classes.markerContainer}
lat={place.latitude}
lng={place.longitude}
key={index}
>
{!isDesktop ? (
  <LocationOnOutlinedIcon color="primary" fontSize="large" />
) : place.name ? (
  <Paper elevation={3} className={classes.paper}>
    <Typography className={classes.typography} variant="subtitle2">
      {place.name}
    </Typography>
    <img
      alt={place.name}
      src={place.photo ? place.photo.images.large.url : restaurant}
    />
    <Rating
      name={place.name}
      size="small"
      value={Number(place.rating)}
      readOnly
    />
  </Paper>
) : (
  ""
)}
</div> */
}
