const sendRequest = (endpoint, method, payload) => new Promise((resolve, reject) => {
  const url = `http://localhost:8000/${endpoint}`;
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(xhr.response);
    } else {
      reject(xhr.status);
    }
  };
  xhr.send(JSON.stringify(payload));
});

export const login = async (payload) => {
  const response = await sendRequest('login/', 'POST', payload);
  return response;
};

export const logout = async () => {
  sendRequest('logout/', 'GET');
};

export const cat = async () => {
  const response = await sendRequest('cat/', 'GET');
  return response;
};
