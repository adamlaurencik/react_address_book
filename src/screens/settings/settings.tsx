import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Button,
} from "@material-ui/core";
import useLocalStorage from "hooks/local-storage-hook";
import Nationality from "model/nationality";
import ReactCountryFlag from "react-country-flag";
import { useHistory } from "react-router";
import useEventCallback from "use-event-callback";
import useSettingsStyles from "./settings-styles";

export default function SettingsScreen() {
  const classes = useSettingsStyles();
  const history = useHistory();
  const [nationality, setNationality] = useLocalStorage(
    "nationality",
    Nationality.CH
  );
  const [tourFinished, setTourFinished] = useLocalStorage(
    "tourFinished",
    false
  );

  const handleRestartAppTutorial = useEventCallback(() => {
    setTourFinished(false);
    history.push("/");
  });

  return (
    <Box>
      <Typography variant="h4">Settings</Typography>
      <TextField
        value={nationality}
        select
        margin="normal"
        size="small"
        variant="outlined"
        label="Nationality"
        onChange={(e) => setNationality(e.target.value as Nationality)}
      >
        <MenuItem value={Nationality.CH}>
          <ReactCountryFlag
            countryCode={Nationality.CH}
            svg={true}
            className={classes.countryFlag}
          />
          Switzerland
        </MenuItem>
        <MenuItem value={Nationality.ES}>
          <ReactCountryFlag
            countryCode={Nationality.ES}
            svg={true}
            className={classes.countryFlag}
          />
          Spain
        </MenuItem>
        <MenuItem value={Nationality.FR}>
          <ReactCountryFlag
            countryCode={Nationality.FR}
            svg={true}
            className={classes.countryFlag}
          />
          French
        </MenuItem>
        <MenuItem value={Nationality.GB}>
          <ReactCountryFlag
            countryCode={Nationality.GB}
            svg={true}
            className={classes.countryFlag}
          />
          Great Britain
        </MenuItem>
      </TextField>
      <br />
      <Button
        variant="outlined"
        color="primary"
        disabled={!tourFinished}
        onClick={handleRestartAppTutorial}
      >
        Restart app tutorial
      </Button>
    </Box>
  );
}
