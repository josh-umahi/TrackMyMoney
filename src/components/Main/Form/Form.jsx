import React, { useContext, useEffect, useState } from "react";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

import useStyles from "./styles";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import { MoneyTrackerContext } from "../../../context/MoneyTrackerContext";
import formatDate from "../../../utils/formatDate";

// TODO: Remeber to round to 2dp at every point 
const Form = () => {
  const classes = useStyles();
  const { addTransaction } = useContext(MoneyTrackerContext);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [transactionType, setTransactionType] = useState("Income");
  const [date, setDate] = useState(formatDate(new Date()));
  const [categoryError, setCategoryError] = useState(null);
  const [amountError, setAmountError] = useState(null);

  useEffect(() => {
    if (categoryError) {
      setCategoryError(category === "");
    }
  }, [category]);

  useEffect(() => {
    if (amountError) {
      setAmountError(amount === "");
    }
  }, [amount]);

  const alertInputErrors = () => {
    setCategoryError(category === "");
    setAmountError(amount === "");
  };

  const errorWillOccurOnSubmit = () => {
    if (
      categoryError ||
      amountError ||
      Number.isNaN(Number(amount)) ||
      !date.includes("-")
    ) {
      return true;
    }
    return false;
  };

  const createTransaction = () => {
    alertInputErrors();
    if (errorWillOccurOnSubmit()) {
      return;
    }

    const transaction = {
      id: uuidv4(),
      amount: Number(amount),
      type: transactionType,
      category: category,
      date: date,
    };

    addTransaction(transaction);
    resetForm();
  };

  const resetForm = () => {
    setAmount("");
    setCategory("");
    setTransactionType("Income");
    setDate(formatDate(new Date()));
  };

  const selectedCategories =
    transactionType === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel error={categoryError}>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          error={amountError}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
