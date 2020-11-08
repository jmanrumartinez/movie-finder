const baseUrl = process.env.REACT_APP_API_URL;

export default class ApiClient {
  static objectToParams(params) {
    if (Object.keys(params).length === 0) return '';

    let str = '';
    Object.keys(params).forEach((key) => {
      if (str !== '') {
        str += '&';
      }
      str += `${key}=${encodeURIComponent(params[key])}`;
    });

    return str;
  }

  static get(url = '', params = {}, headers = {}) {
    // eslint-disable-next-line no-param-reassign
    params = { ...params, api_key: process.env.REACT_APP_API_KEY };
    return fetch(`${baseUrl}${url}?${this.objectToParams(params)}`, {
      method: 'GET',
      headers,
    }).then((res) => res.json());
  }
}
