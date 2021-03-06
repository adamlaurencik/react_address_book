import { Button } from "@material-ui/core";
import { Step } from "react-joyride";

export default function useAppTourSteps() {
  return [
    {
      title: "Address book table",
      content: (
        <>
          Table displays your contacts. Scroll, to load new contacts. <br />
          Click on
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "0px 5px" }}
          >
            DETAIL
          </Button>
          to send your contact an email, call them, or see their location.
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
          To get back to the home page, click on the app name in the left
          corner.
        </>
      ),
      target: "#home-link",
      placement: "bottom-start",
    },
  ] as Step[];
}
