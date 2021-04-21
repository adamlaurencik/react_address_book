import { Box, Select, Typography } from "@material-ui/core";
import useLocalStorage from "hooks/local-storage-hook";
import Nationality from "model/nationality";

export default function SettingsScreen() {
  const [nationality, setNationality] = useLocalStorage(
    "nationality",
    Nationality.CH
  );

  return (
    <Box>
      <Typography variant="h4">Settings</Typography>
      <Select
        value={nationality}
        onChange={(e) => setNationality(e.target.value as Nationality)}
      >
        <option value="">All</option>
        <option value={Nationality.CH}>Switzerland</option>
        <option value={Nationality.ES}>Spain</option>
        <option value={Nationality.FR}>French</option>
        <option value={Nationality.GB}>Great Britain</option>
      </Select>
    </Box>
  );
}
