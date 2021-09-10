import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import Image from "material-ui-image";
import { getCat } from "../apis/getCat";
import { Cat } from "../domains/cat";
import { Context } from "../pages";

const useStyles = makeStyles(() => ({
  image: {
    height: "100vh",
  },
}));

const Main = () => {
  const [cat, setCat] = useState(new Cat());
  const [page] = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    const fetchCat = async () => setCat(await getCat(1));
    fetchCat();
  }, [page]);

  return (
    <>
      <Image src={cat.url} style={{ height: "100vh", width: "100%" }} cover />
    </>
  );
};

export default Main;
