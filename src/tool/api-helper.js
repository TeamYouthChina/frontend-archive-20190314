import Cookies from 'js-cookie';
import fetch from 'isomorphic-fetch';

const mock = 'http://47.254.46.117:4000';
const production = 'http://47.254.46.117:8080/api/v1';

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
  if (token) {
    headers.append('x-authentication', token);
  }
  return headers;
};

const updateToken = (headers) => {
  const token = headers.get('x-authentication');
  if (token) {
    Cookies.set('token', token, {expires: 1});
  }
};

export const getAsync = async (urlSuffix, real) => {
  return await get(urlSuffix, real);
};

export const get = (urlSuffix, real) => {
  if (real) {
    return fetch(
      `${production}${urlSuffix}`,
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
  } else {
    return fetch(
      `${mock}${urlSuffix}`,
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
  }
};

export const postAsync = async (urlSuffix, requestBody, real) => {
  return await post(urlSuffix, requestBody, real);
};

const post = (urlSuffix, requestBody, real) => {
  if (real) {
    return fetch(
      `${production}${urlSuffix}`,
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
  } else {
    return fetch(
      `${mock}${urlSuffix}`,
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
  }
};

export const putAsync = async (urlSuffix, requestBody, real) => {
  return await put(urlSuffix, requestBody, real);
};

const put = (urlSuffix, requestBody, real) => {
  if (real) {
    return fetch(
      `${production}${urlSuffix}`,
      {
        method: 'PUT',
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
  } else {
    return fetch(
      `${mock}${urlSuffix}`,
      {
        method: 'PUT',
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
  }
};

export const deleteAsync = async (urlSuffix, real) => {
  return await deleteHttp(urlSuffix, real);
};

const deleteHttp = (urlSuffix, real) => {
  if (real) {
    return fetch(
      `${production}${urlSuffix}`,
      {
        method: 'DELETE',
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
  } else {
    return fetch(
      `${mock}${urlSuffix}`,
      {
        method: 'DELETE',
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
  }
};
