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

const Form = () => {
  const INITIALTRANSACTIONTYPE = "Income";

  const classes = useStyles();
  const { addTransaction } = useContext(MoneyTrackerContext);
  const [transactionType, setTransactionType] = useState(
    INITIALTRANSACTIONTYPE
  );
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));
  const [createButtonIsDisabled, setCreateButtonIsDisabled] = useState(true);
  const [transactionTypeCategories, setTransactionTypeCategories] =
    useState(incomeCategories);
  const [amountError, setAmountError] = useState(false);

  useEffect(() => {
    setTransactionTypeCategories(
      transactionType === "Income" ? incomeCategories : expenseCategories
    );
  }, [transactionType]);

  useEffect(() => {
    setAmountError(isNaN(Number(amount)));
  }, [amount]);

  useEffect(() => {
    /**
     * Our useEffect watches category and amount because transactionType and date will always have a value
     * Also, Decided not to use amountError here because React has control of how it chooses to
     * re-render components upon change in state, I am but a mere mortal so I cant depend on it
     */
    setCreateButtonIsDisabled(
      isNaN(Number(amount)) || amount === "" || category === ""
    );
  }, [category, amount]);

  const resetForm = () => {
    setTransactionType(INITIALTRANSACTIONTYPE);
    setCategory("");
    setAmount("");
    setDate(formatDate(new Date()));
    setCreateButtonIsDisabled(true);
    setAmountError(false);
  };

  const errorWillOccurOnSubmit = () => {
    if (
      transactionType === "" ||
      category === "" ||
      amount === "" ||
      date === "" ||
      amountError
    ) {
      return true;
    }
    return false;
  };

  const createTransaction = () => {
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

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            inputProps={{ "data-testid": "transactionTypeSelect" }}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {transactionTypeCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField
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
          inputProps={{ "data-testid": "dateInput" }}
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
        disabled={createButtonIsDisabled}
        data-testid="createButton"
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
