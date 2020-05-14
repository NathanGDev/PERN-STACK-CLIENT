let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:1337";
    break;
  case "pernstackclient.herokuapp.com":
    APIURL = "https://pernstackserver.herokuapp.com";
}

export default APIURL;
