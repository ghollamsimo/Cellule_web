function getLocalStorageItem(key) {
    const item = localStorage.getItem(key);
    if (item !== null) {
        return item;
    } else {
        return false;
    }
}

export default getLocalStorageItem;
