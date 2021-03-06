import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";
import useTransactions from "../../useTransactions";
import formatMonetaryValue from "../../utils/formatMonetaryValue";

ChartJS.register(ArcElement, Tooltip, Legend);

const DetailsCard = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader className={classes.cardHeader} title={title} />
      <div style={{ padding: "0.5em 1em" }}>
        <Divider />
      </div>
      <CardContent>
        <Typography variant="h5">{formatMonetaryValue(total)}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
