export const TOKEN = 'token';
export const isAutheticated = () => localStorage.getItem(TOKEN) !== null;
export const getToken = () => localStorage.getItem(TOKEN);
export const login = token => {
    localStorage.setItem(TOKEN, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN)
}
