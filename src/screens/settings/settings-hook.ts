import useLocalStorage from "hooks/local-storage-hook";
import Nationality from "model/nationality";
import { useHistory } from "react-router";
import useEventCallback from "use-event-callback";

export default function useSettings() {
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

  return {
    nationality,
    setNationality,
    tourFinished,
    handleRestartAppTutorial,
  };
}
