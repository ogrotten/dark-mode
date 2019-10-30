import { useState } from "react";

export const useLocalStorage = (key, initVal) => {
	const [storedVal, setStoredVal] = useState(() => {
		return window.localStorage.getItem(key) 
			? JSON.parse(item)
			: initVal;
	});

	const setValue = value => {
		setStoredVal(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	}

	return [storedVal];
};
