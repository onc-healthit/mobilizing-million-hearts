/* eslint-disable class-methods-use-this */

const mockRequest = ({ params, query, body } = {}) => ({
	params: params || {},
	query: query || {},
	body: body || {},
	ip: '127.0.0.1',
});

jest.mock('mockRequest', () => mockRequest);

module.exports = mockRequest;
