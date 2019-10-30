import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		const send = window.localStorage.getItem(key)
		return send ? JSON.parse(send) : initialValue;
		// return send;
	});

	const setValue = value => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
};
