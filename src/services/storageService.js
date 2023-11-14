


/**
 * Saves a the specified value in Local Storage using provided key. The value
 * is stored using JSON format.
 *  
 * @param {*} key 
 * @param {*} value - object ()
 */
function persistInLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Saves a the specified value in Session Storage using provided key. The value
 * is stored using JSON format.
 *  
 * @param {*} key 
 * @param {*} value - object ()
 */
function persistInSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrives the value associated with the provided key from Local Storage.
 * If they key does not exists, returns an empty object.
 *  
 * @param {*} key 
 */
function getFromLocal(key) {
    return JSON.parse(localStorage.getItem(key)) || null;
}

/**
 * Retrives the value associated with the provided key from Local Storage.
 * If they key does not exists, returns an empty object.
 *  
 * @param {*} key 
 */
function getFromSession(key) {
    return JSON.parse(localStorage.getItem(key)) || null;
}

const storageService = {
    persistInSession,
    persistInLocal,
    getFromSession,
    getFromLocal,
};

export default storageService;