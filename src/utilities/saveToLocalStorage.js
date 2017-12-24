export default function saveToLocalStorage(data) {
  localStorage.username = data.username;
  localStorage.email = data.email;
  localStorage.token = data.token;
}
