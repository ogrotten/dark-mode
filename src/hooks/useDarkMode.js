import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (incoming) => {
	const [dark, setDark] = useLocalStorage(incoming);
	const body = document.querySelector("body");

	useEffect(() => {
		if (dark){
			// bodychange add
			body.classList.add
		} else {
			//bodychange remove
		}

		
	}, [dark]);
};
