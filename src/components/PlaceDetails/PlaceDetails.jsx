import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Rating from "@material-ui/lab/Rating";
import PhoneIcon from "@material-ui/icons/Phone";
import useStyles from "./styles";

import restaurant from "../../images/rest-comp.jpg";
import { useRef } from "react";

const PlaceDetails = ({ place, selected }) => {
  const currentRef = useRef();
  const classes = useStyles();

  if (selected) currentRef?.current?.scrollIntoView({ behavior: "smooth" });

  if (place.name) {
    return (
      <div ref={currentRef}>
        <Card elevation={6}>
          <CardMedia
            style={{ height: 300 }}
            title={place.name}
            image={place.photo ? place.photo.images.large.url : restaurant}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {place.name}
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Rating name={place.name} value={Number(place.rating)} readOnly />
              <Typography variant="subtitle1">
                out of {place.num_reviews} reviews
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Price</Typography>
              <Typography variant="subtitle1">{place.price_level}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Rating</Typography>
              <Typography variant="subtitle1">{place.ranking}</Typography>
            </Box>
            {place?.awards?.map((award, index) => (
              <Box
                display="flex"
                key={index}
                my={2}
                justifyContent="space-between"
              >
                <img src={award.images.small} alt={award.display_name} />
                <Typography variant="subtitle2">
                  {award.display_name}
                </Typography>
              </Box>
            ))}
            {place?.cuisine?.map(({ name }) => (
              <Chip
                key={name}
                size="small"
                label={name}
                className={classes.chip}
              />
            ))}
            {place?.address && (
              <Typography
                gutterBottom
                variant="subtitle2"
                className={classes.subtitle}
                color="textSecondary"
              >
                <LocationOnIcon /> {place.address}
              </Typography>
            )}
            {place?.phone && (
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.subtitle}
                color="textSecondary"
              >
                <PhoneIcon /> {place.phone}
              </Typography>
            )}
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.open(place.web_url, "_blank");
                }}
              >
                Trip Advisor
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.open(place.website, "_blank");
                }}
              >
                Website
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default PlaceDetails;
