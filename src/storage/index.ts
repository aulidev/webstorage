export const localStorage = {
	getItem(key: string) {
		try {
			return window.localStorage.getItem(key);
		} catch (e) {
			return null;
		}
	},
	setItem(key: string, value: string) {
		try {
			window.localStorage.setItem(key, value);
		} catch (e) {
			return;
		}
	},
	removeItem: (key: string) => {
		try {
			window.localStorage.removeItem(key);
		} catch (e) {
			return;
		}
	},
	clear: () => {
		try {
			window.localStorage.clear();
		} catch (e) {
			return;
		}
	},
};
