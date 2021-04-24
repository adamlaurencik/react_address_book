import useLocalStorage from "hooks/local-storage-hook";
import Joyride, { CallBackProps } from "react-joyride";
import useEventCallback from "use-event-callback";
import useAppTourSteps from "./app-tour-steps";
import TourCard from "./tour-card";

export default function AppTour() {
  const [tourFinished, setTourFinished] = useLocalStorage(
    "tourFinished",
    false
  );
  const steps = useAppTourSteps();

  const handleCallback = useEventCallback((data: CallBackProps) => {
    if (data.status === "finished") {
      setTourFinished(true);
    }
  });
  return (
    <Joyride
      steps={steps}
      continuous={true}
      tooltipComponent={TourCard}
      run={!tourFinished}
      callback={handleCallback}
    />
  );
}
