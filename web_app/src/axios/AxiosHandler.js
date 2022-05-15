import axios from "axios"

export default axios.create({
    // baseURL: "http://0.0.0.0:3050" Uvic WiFi
    baseURL: "http://localhost:3050"
});

