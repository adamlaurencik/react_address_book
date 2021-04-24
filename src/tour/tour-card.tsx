import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  makeStyles,
} from "@material-ui/core";
import { TooltipRenderProps } from "react-joyride";

const useTourCardStyles = makeStyles({
  root: {
    width: 500,
    maxWidth: "80vw",
  },
  header: {
    paddingBottom: 0,
  },
  actions: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

export default function TourCard({
  step,
  tooltipProps,
  backProps,
  primaryProps,
  isLastStep,
}: TooltipRenderProps) {
  const classes = useTourCardStyles();
  return (
    <Card {...tooltipProps} className={classes.root}>
      <CardHeader title={step.title} className={classes.header} />
      <CardContent>{step.content}</CardContent>
      <CardActions className={classes.actions}>
        <Button {...backProps}>Back</Button>
        <Button {...primaryProps} variant="contained" color="primary">
          {isLastStep ? "Finish" : "Next"}
        </Button>
      </CardActions>
    </Card>
  );
}
