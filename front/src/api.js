import axios from 'axios';

const backendPortNumber = '5001';
const serverUrl =
  'http://' + window.location.hostname + ':' + backendPortNumber + '/';

async function get(endpoint, params = '') {
  console.log(`%cGET 요청 ${serverUrl + endpoint + '/' + params}`, 'color: #a25cd1;');
  return axios.get(serverUrl + endpoint + '/' + params, {
    // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    withCredentials: true,
  });
}

async function post(endpoint, data) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);
  console.log(`%cPOST 요청: ${serverUrl + endpoint}`, 'color: #296aba;');
  console.log(`%cPOST 요청 데이터: ${bodyData}`, 'color: #296aba;');

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    withCredentials: true,
  });
}

async function put(endpoint, data) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);
  console.log(`%cPUT 요청: ${serverUrl + endpoint}`, 'color: #059c4b;');
  console.log(`%cPUT 요청 데이터: ${bodyData}`, 'color: #059c4b;');

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    withCredentials: true,
  });
}

async function del(endpoint, params = '') {
  console.log(`DELETE 요청 ${serverUrl + endpoint + '/' + params}`);
  return axios.delete(serverUrl + endpoint + '/' + params, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    withCredentials: true,
  });
}

async function putImg(endpoint, data) {
  console.log(`%cPUT 요청: ${serverUrl + endpoint}`, 'color: #059c4b;');
  console.log(`%cPUT 요청 데이터: ${data}`, 'color: #059c4b;');
  const Url = 'http://kdt-ai4-team12-gpu.elicecoding.com:5000/predict';
  return axios.post(Url, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    withCredentials: true,
  });
}

async function postDiary(data) {
  const bodyData = JSON.stringify(data);
  console.log(`%cPOST 요청 데이터: ${bodyData}`, 'color: #296aba;');
  const Url = 'http://kdt-ai4-team12-gpu.elicecoding.com:5000/predict';
  return axios.post(Url, bodyData, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: false,
  });
}

// 아래처럼 export한 후, import * as A 방식으로 가져오면,
// A.get, A.post 로 쓸 수 있음.
export { get, post, put, del as delete, putImg, postDiary };
