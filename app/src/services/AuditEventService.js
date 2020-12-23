import { features } from '../config';

const { auditing } = features;

export default class AuditEventService {
	constructor({ patient, encounter, user, tenant } = {}) {
		this.auditInformation = { patient, encounter, user, tenant };
	}

	create(name, additionalFields) {
		const payload = { name, ...this.auditInformation, ...additionalFields };

		// Only post audit events if this feature is enabled
		if (auditing) {
			return fetch('/api/auditevent', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			}).then((res) => res.json());
		}

		// else, return a resolved promise
		return Promise.resolve();
	}
}
