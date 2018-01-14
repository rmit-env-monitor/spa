export default function convertUnixTimestamp(UNIX_timestamp) {
  let timestamp = new Date(UNIX_timestamp * 1000);
  let year = timestamp.getFullYear();
  let month = timestamp.getMonth() + 1;
  let date = timestamp.getDate();
  let hour = timestamp.getHours();
  let min = timestamp.getMinutes();
  let sec = timestamp.getSeconds();
  return date + "/" + month + "/" + year + " - " + hour + ":" + min + ":" + sec;
}
