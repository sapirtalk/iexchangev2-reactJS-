function getStorageValue(key, defaultValue) {
	// getting stored value
	const saved = localStorage.getItem(key);
	return saved || defaultValue;
}

export default getStorageValue;
