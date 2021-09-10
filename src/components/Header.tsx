import { AppBar, Container, CssBaseline, Typography } from "@material-ui/core";
import React from "react";

const Header = () => (
  <>
    <CssBaseline />
    <AppBar position="fixed">
      <Container fixed>
        <Typography variant="h4">ねこ画像カタログ</Typography>
        <Typography variant="subtitle2">画面下の矢印で画像切り替え</Typography>
      </Container>
    </AppBar>
  </>
);

export default Header;
