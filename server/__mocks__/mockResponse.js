const mockResponse = ({ json } = {}) => {
	return {
		status: jest.fn().mockReturnThis(),
		json: json || jest.fn().mockReturnThis(),
	};
};

jest.mock('mockResponse', () => mockResponse);

module.exports = mockResponse;
