const sendRequest = (endpoint, method, payload) => new Promise((resolve) => {
  const url = `localhost:8000/${endpoint}`;
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    if (this.status === 200) {
      resolve(xhr.response);
    }
  };
  xhr.send(JSON.stringify(payload));
});

export default sendRequest;
