import useLocalStorage from "hooks/local-storage-hook";
import Nationality from "model/nationality";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";
import useEventCallback from "use-event-callback";

export default function useSettings() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [nationalities, setNationalities] = useLocalStorage("nationalities", [
    Nationality.CH,
  ]);
  const [tourFinished, setTourFinished] = useLocalStorage(
    "tourFinished",
    false
  );

  const handleRestartAppTutorial = useEventCallback(() => {
    setTourFinished(false);
    history.push("/");
  });

  const setNationalitiesWrapper = useEventCallback((nats: Nationality[]) => {
    if (nats.length === 0) {
      enqueueSnackbar("At least one nationality has to be selected", {
        variant: "error",
      });
    } else {
      setNationalities(nats);
    }
  });

  return {
    nationalities,
    setNationalitiesWrapper,
    tourFinished,
    handleRestartAppTutorial,
  };
}
