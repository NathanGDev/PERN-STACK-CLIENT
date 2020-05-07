let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:<Port of your local API>";
    break;
  case "pernstackclient.herokuapp.com":
    APIURL = "https://pernstackclient.herokuapp.com/";
}

export default APIURL;
