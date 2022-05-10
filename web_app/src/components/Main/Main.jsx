import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Track My Money" />
      <CardContent>
        <Typography align="center" variant="h5">
          $Total Balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          {/* <InfoCard /> */}
        </Typography>
        <Divider />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
