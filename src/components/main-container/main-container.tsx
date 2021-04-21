import Container from "@material-ui/core/Container";
import { ReactChild } from "react";

import useMainContainerStyles from "./main-container-styles";

interface MainContainerProps {
  children: ReactChild;
}

export default function MainContainer({ children }: MainContainerProps) {
  const classes = useMainContainerStyles();
  return <Container className={classes.mainContainer}>{children}</Container>;
}
