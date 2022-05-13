import { makeStyles } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  avatarIncome: {
    color: "#fff",
    backgroundColor: "rgb(29, 94, 229)",
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: "rgb(255, 149, 51)",
  },
  list: {
    maxHeight: "150px",
    overflow: "auto",
    backgroundColor: "#F4F4F9",
    marginTop: "1em"
  },
}));
