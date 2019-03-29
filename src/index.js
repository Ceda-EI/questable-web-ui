import React, { useState } from "react";
import ReactDOM from "react-dom";
import "nes.css/css/nes.min.css";
import "./scss/index.scss";
import { config } from "./config";
import axios from "axios";
import login from "./components/login";
import mainapp from "./components/mainapp";
import models from "./models";
import swal from "sweetalert";

const { player } = models(config, axios);

const Login = login(player, swal);
const MainApp = mainapp(player);

function App(){
	const [loggedIn, setLoggedIn] = useState(false);
	const token = localStorage.getItem("token");
	if (loggedIn === false && token !== null) {
		player.auth(token).then(res => {
			// To cause it to re-render
			setLoggedIn(true);
			setLoggedIn(res);
			if (res === false) {
				localStorage.removeItem("token");
			}
		});
		return <div className="loader full_screen"><img alt="loader" src="./loader.svg"></img></div>;
	} else if (loggedIn === false)
		return <Login setLoggedIn={setLoggedIn} />;
	else
		return <MainApp setLoggedIn={setLoggedIn} />;
}

ReactDOM.render(<App />, document.getElementById("root"));
