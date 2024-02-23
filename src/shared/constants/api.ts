import isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';

const baseApiVersion = 'api/v1';

const baseUrl = process.env.REACT_APP_BASE_URL || '';

export const API_CONFIG = {
	baseUrl,
	path: {
		login: `${baseApiVersion}/login`
	}
};

export const getUrl = (url: string, params: any = {}): string => {
	if (isEmpty(params)) return url;

	Object.keys(params).forEach((key) => (params[key] == null || params[key] === '') && delete params[key]);
	return `${url}?${queryString.stringify(params)}`;
};
