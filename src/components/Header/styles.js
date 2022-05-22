import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    header: {
        backgroundColor: "#fff",
        padding: "0 100px",
        "@media (max-width: 900px)": {
            padding: 0,
        },
    },
    logo: {
        fontFamily: "Exo, sans-serif",
        fontWeight: 600,
        color: "#000",
        textAlign: "left",
        textTransform: "uppercase",
        border: "2px solid #FAD400",
        padding: "0 1em"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
    },
    outerText: {
        fontFamily: "Exo, sans-serif",
        color: "#000",
        display: "inline-block",
        fontWeight: 400,
        lineHeight: "100%"
    },
    innerText: {
        fontFamily: "Exo, sans-serif",
        color: "#000",
        display: "inline-block",
        fontWeight: 400,
        borderBottom: "2px solid #FAD400",
        lineHeight: "143%"
    }
}));
