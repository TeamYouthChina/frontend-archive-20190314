import Cookies from 'js-cookie';
import fetch from 'isomorphic-fetch';

const urlPrefix = 'http://47.254.46.117:4000';

const generateHeaders = () => {
  let language = Cookies.get('language');
  if (!language) {
    language = 'zh_CN';
    Cookies.set('language', language, {expires: 365});
  }
  let headers = {
    'Content-Type': 'application/json',
    'x-language': language
  };
  const token = Cookies.get('token');
  if (token) {
    headers = {
      ...headers,
      'x-token': token
    };
  }
  return headers;
};

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

export const putAsync = async (urlSuffix, requestBody) => {
  return await put(urlSuffix, requestBody);
};

const put = (urlSuffix, requestBody) => {
  return fetch(
    `${urlPrefix}${urlSuffix}`,
    {
      method: 'PUT',
      headers: generateHeaders(),
      body: JSON.stringify(requestBody)
    }
  ).then((response) => {
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

export const deleteAsync = async (urlSuffix) => {
  return await deleteHttp(urlSuffix);
};

const deleteHttp = (urlSuffix) => {
  return fetch(
    `${urlPrefix}${urlSuffix}`,
    {
      method: 'DELETE',
      headers: generateHeaders()
    }
  ).then((response) => {
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
