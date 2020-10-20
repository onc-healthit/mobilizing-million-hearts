/* eslint-disable import/no-unresolved */
const mockRequest = require('mockRequest');
const mockResponse = require('mockResponse');

const controller = require('./auditevent.controller');
const service = require('./auditevent.service');

jest.mock('./auditevent.service', () => {
	return {
		create: jest.fn(options => {
			return [options];
		}),
	};
});

describe('Controller: AuditEvent tests', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('create: controller should call the service', async () => {
		const mockreq = mockRequest({ body: { name: 'ASCVD_SCORE' } });
		const mockres = mockResponse();
		await controller.create(mockreq, mockres);
		expect(service.create.mock.calls[0][0]).toEqual({
			name: 'ASCVD_SCORE',
			requestorIp: '127.0.0.1',
		});
	});

	test('create: controller should call next when there is an error', async () => {
		service.create = jest.fn(() => [null, 'Error']);
		const mockreq = mockRequest({ body: { name: 'ASCVD_SCORE' } });
		const mockres = mockResponse();
		const next = jest.fn();
		await controller.create(mockreq, mockres, next);
		expect(next.mock.calls[0][0]).toEqual('Error');
	});
});
