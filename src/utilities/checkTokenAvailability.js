export default () => {
  return localStorage.token || localStorage.google_id_token
};
