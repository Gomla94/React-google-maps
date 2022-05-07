import useStyles from "./styles";

const Marker = (props) => {
  const classes = useStyles();
  return <div className={classes.markerContainer}>{props.children}</div>;
};

export default Marker;
