export default function saveToLocalStorage(data) {
    localStorage.username = data.username
    localStorage.token = data.token
}