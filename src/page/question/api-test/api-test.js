import Cookies from 'js-cookie';
import fetch from 'isomorphic-fetch';

const mock = 'http://47.254.46.117:4000';
const production = 'http://47.254.46.117:8080/api/v1';

export const env = 'production';

const urlPrefix = env === 'production' ? production : mock;

const generateHeaders = () => {
  let language = Cookies.get('language');
  if (!language) {
    language = 'zh_CN';
    Cookies.set('language', language, {expires: 365});
  }
  let headers = new Headers({
    'x-language': language,
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*'
  });
  const token = Cookies.get('token');
  // 手动加了一下认证
  headers.append('x-authentication', 'YouthChina eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNTUxOTczOTQyfQ.Eto6dQLXp34N12j0Ad_ZHzVX0wIiuivNh6SYALlpBBiJ1xdWFKn5ukjX7vQFeI493X2gpqdRZEzlj3HpZ7BFag');
  
  return headers;
};

const updateToken = (headers) => {
  const token = headers.get('x-authentication');
  if (token) {
    Cookies.set('token', token, {expires: 1});
  }
};

export const getLoading = (urlSuffix) =>{
  return fetch(
    `${urlPrefix}${urlSuffix}`,
    {
      method: 'GET',
      headers: generateHeaders()
    }
  )
}

export const getAsync = async (urlSuffix) => {
  return await get(urlSuffix);
};

export const get = (urlSuffix) => {
  return fetch(
    `${urlPrefix}${urlSuffix}`,
    {
      method: 'GET',
      headers: generateHeaders()
    }
  ).then((response) => {
    updateToken(response.headers);
    return response.json();
  }).catch((error) => {
    return {
      status: {
        code: 5000,
        reason: error.toString()
      }
    };
  });
};

export const postAsync = async (urlSuffix, requestBody) => {
  return await post(urlSuffix, requestBody);
};

const post = (urlSuffix, requestBody) => {
  return fetch(
    `${urlPrefix}${urlSuffix}`,
    {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify(requestBody)
    }
  ).then((response) => {
    updateToken(response.headers);
    return response.json();
  }).catch((error) => {
    return {
      status: {
        code: 5000,
        reason: error.toString()
      }
    };
  });
};


