import React, { useContext, useEffect, useState } from "react";
import Image from "material-ui-image";
import { getCat } from "../apis/getCat";
import { Cat } from "../domains/cat";
import { Context } from "../pages";

const Main = () => {
  const [cat, setCat] = useState(new Cat());
  const [page] = useContext(Context);

  useEffect(() => {
    const fetchCat = async () => setCat(await getCat(page));
    fetchCat();
  }, [page]);

  return (
    <>
      <Image src={cat.url} style={{ height: "100vh", width: "100%" }} cover />
    </>
  );
};

export default Main;
