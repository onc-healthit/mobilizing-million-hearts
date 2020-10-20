import { features } from '../config';

const { auditing } = features;

export default class AuditEventService {
	constructor({ patient, encounter, user, tenant } = {}) {
		this.auditInformation = { patient, encounter, user, tenant };
	}

	create(name, additionalFields) {
		const payload = { name, ...this.auditInformation, ...additionalFields };
		if (auditing) {
			return fetch('/api/auditevent', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			}).then((res) => res.json());
		}

		return Promise.resolve();
	}
}
