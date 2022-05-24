# Track My Money

A web app to monitor and track my income and daily expenses

To see a working demo, [click here](https://trackmymoney-by-josh.netlify.app).

<br>

## App Preview

<img src="https://raw.githubusercontent.com/josh-umahi/josh-umahi/master/.github/images/track_my_money.png"/>

<br>

## How this web app was made

This app was built using [React](https://reactjs.org) and few other dependencies, mostly from Material UI. I also implemented React component testing with [jest](https://jestjs.io/docs/tutorial-react) and [React testing library](https://testing-library.com/docs/react-testing-library/intro/).

More of the app's structural layer is detailed below:

| Tools                                | Usage                                                  |
| ------------------------------------ | ------------------------------------------------------ |
| **Context API and Reducer**          | For State Management                                   |
| **Custom Hooks Eg: useTransactions** | To maintain data flow into the chart                   |
| **Localstorage**                          | To store the transactions locally and avoid having to request from a server |
| **Testing**                          | To ensure confidence in my code as I modified the Form |
| **Chart JS**                         | Easily construct a chart with swift animations         |
