import { Component, createSignal } from "solid-js";

import styles from "./App.module.css";

import Logo from "./assets/images/logo.svg";
import dashboardImage from "./assets/images/illustration-dashboard.png";

const SubForm: Component = () => {
	function submitHandle(e: SubmitEvent) {
		e.preventDefault();
		console.log(e.target!);
	}

	return (
		<form onSubmit={submitHandle} class={styles.notifyform}>
			<input type="email" name="email" placeholder="Your email address..." />
			<button type="submit">Notify Me</button>
		</form>
	);
};

const App: Component = () => {
	return (
		<div class={styles.App}>
			<img src={Logo} alt="Ping Logo" />
			<h1 class={styles.title}>
				We are launching <span class={styles.bold}>soon!</span>
			</h1>
			<p>Subscribe and get notified</p>
			<SubForm />
			<img
				class={styles.dashboardimg}
				src={dashboardImage}
				alt="Dashboard Illustration"
			/>
			<div class={styles.sociallinks}></div>
			<span class={styles.copyright}>
				&copy; Copyright Ping. All rights reserved
			</span>
		</div>
	);
};

export default App;
