import { useState, useEffect } from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = (incoming) => {
	const [darkMode, setDarkMode] = useLocalStorage(incoming);
	const body = document.querySelector("body");

	useEffect(() => {
		darkMode ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
	}, [darkMode]);

	return [darkMode, setDarkMode]
};
