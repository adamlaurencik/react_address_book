import useLocalStorage from "hooks/local-storage-hook";
import Joyride, { Step, CallBackProps } from "react-joyride";
import useEventCallback from "use-event-callback";
import TourCard from "./tour-card";

const steps: Step[] = [
  {
    title: "Address book table",
    content: (
      <>
        The table is the main component of the app, it allows you to search
        through your contacts. <br />
        By clicking on DETAIL button, you can send your contact an email, call
        them or see their location.
      </>
    ),
    target: "#contact-table",
    placementBeacon: "top-start",
    disableScrolling: true,
    disableScrollParentFix: true,
    placement: "top-start",
  },
  {
    title: "Address book search box",
    content: (
      <>
        The search box allows you to filter the loaded results. <br />
        If the filter is active, you cannot load new contacts by scrolling.
      </>
    ),
    target: "#search-filter",
    placement: "bottom-start",
  },
  {
    title: "Settings page",
    content: (
      <>
        In settings page, you can select the nationality, for contacts
        filtering. <br />
        Or restart the ongoing application tutorial
      </>
    ),
    target: "#settings-link",
    placement: "bottom-start",
  },
  {
    title: "Navigate home",
    content: (
      <>
        To get back to the home page, click on the Address Book App link in the
        header.
      </>
    ),
    target: "#home-link",
    placement: "bottom-start",
  },
];

export default function AppTour() {
  const [tourFinished, setTourFinished] = useLocalStorage(
    "tourFinished",
    false
  );
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
