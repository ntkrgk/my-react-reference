import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../pages/";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [page, setPage] = useContext(Context);

  return (
    <BottomNavigation
      onChange={(_, newValue) => {
        setPage(newValue);
      }}
      className={classes.nav}
    >
      <BottomNavigationAction
        icon={<ArrowBack />}
        value={page - 1}
        disabled={!!(page - 1)}
      />
      <BottomNavigationAction icon={<ArrowForward />} value={page + 1} />
    </BottomNavigation>
  );
};

export default Footer;
