import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import { MoneyTrackerContext } from "../../context/MoneyTrackerContext";
import formatMonetaryValue from "../../utils/formatMonetaryValue";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(MoneyTrackerContext);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography align="center" variant="h5" className={classes.total}>
          Total Balance: {formatMonetaryValue(balance)}
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
