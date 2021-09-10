import { makeStyles } from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

// ページ番号を保持するContext
export const Context = React.createContext<
  [number, React.Dispatch<React.SetStateAction<number>>]
>([1, () => {}]);

const useStyles = makeStyles({
  root: {
    height: "100vh",
    overflow: "hidden",
  },
});

const Home: NextPage = () => {
  const [page, setPage] = useState(1);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>React+Next+Material UI 参考実装</title>
      </Head>
      <Context.Provider value={[page, setPage]}>
        <Header />
        <Main />
        <Footer />
      </Context.Provider>
    </div>
  );
};

export default Home;
