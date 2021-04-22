import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import { TooltipRenderProps } from "react-joyride";

export default function TourCard({
  step,
  tooltipProps,
  backProps,
  primaryProps,
  isLastStep,
}: TooltipRenderProps) {
  return (
    <Card {...tooltipProps} style={{ maxWidth: "80vw" }}>
      <CardHeader title={step.title} />
      <CardContent>{step.content}</CardContent>
      <CardActions
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Button {...backProps}>Back</Button>
        <Button {...primaryProps} variant="contained" color="primary">
          {isLastStep ? "Finish" : "Next"}
        </Button>
      </CardActions>
    </Card>
  );
}
