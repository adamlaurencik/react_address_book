import { makeStyles } from "@material-ui/core";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import User from "model/user";

const useContactMapStyles = makeStyles({
  mapContainer: {
    maxWidth: "90vw",
    maxHeight: "50vh",
    width: "100%",
    height: "400px",
  },
});

interface ContactMapProps {
  user: User;
}

export default function ContactMap({ user }: ContactMapProps) {
  const classes = useContactMapStyles();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!,
  });
  if (!isLoaded) return null;

  const location = {
    lat: parseFloat(user.location.coordinates.latitude),
    lng: parseFloat(user.location.coordinates.longitude),
  };

  return (
    <GoogleMap
      mapContainerClassName={classes.mapContainer}
      center={location}
      zoom={8}
      clickableIcons={false}
      options={{ disableDefaultUI: true }}
    >
      <Marker
        position={location}
        title={`${user.name.first} ${user.name.last}`}
      />
    </GoogleMap>
  );
}
