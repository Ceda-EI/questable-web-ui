import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { config } from "./config";
import axios from "axios";
import login from "./components/login";
import mainapp from "./components/mainapp";
import models from "./models";

const { player } = models(config, axios);

const Login = login(player);
const MainApp = mainapp();

function App(){
	const [loggedIn, setLoggedIn] = useState(false);
	return loggedIn ? <MainApp /> : <Login setLoggedIn={setLoggedIn} />;
}

ReactDOM.render(<App />, document.getElementById("root"));
