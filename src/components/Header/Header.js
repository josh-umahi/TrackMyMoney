import React, { useState, useEffect, useContext } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./styles";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
    const { header, logo, toolbar, drawerContainer, outerText, innerText } = useStyles();

    const { userId } = useContext(AuthContext);
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {ourLogo}
                <div>{getUserIdDisplayed()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton style={{ "color": "#000" }}
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getUserIdDisplayed()}</div>
                </Drawer>

                <div>{ourLogo}</div>
            </Toolbar>
        );
    };

    const ourLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            Track My Money
        </Typography>
    );

    const getUserIdDisplayed = () => {
        return (
            <div>
                <Typography variant="h6" component="h1" className={outerText}>
                    Your assigned User ID is&nbsp;
                </Typography>
                <Typography variant="h6" className={innerText}>
                    {userId}
                </Typography>
            </div>
        );
    };

    return (
        <header style={{ marginBottom: mobileView ? "70px" : "0" }}>
            <AppBar className={header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}

export default Header;
