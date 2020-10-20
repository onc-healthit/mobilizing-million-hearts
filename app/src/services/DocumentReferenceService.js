import moment from 'moment';
import { documentReferenceConfiguration } from '../config';

export default class DocumentReferenceService {
	constructor(client) {
		this.client = client;
	}

	createDocumentReference(options) {
		const documentReference = this.buildExampleDocumentReference(options);
		return this.create(documentReference);
	}

	create(resource) {
		return this.client.request({
			url: `${resource.resourceType}`,
			method: 'POST',
			body: JSON.stringify(resource),
			headers: {
				'Content-Type': 'application/json+fhir',
			},
		});
	}

	buildExampleDocumentReference({ risk, notes, riskText }) {
		const { coding, docStatus } = documentReferenceConfiguration;
		const { tokenResponse } = this.client.state;
		const userId = tokenResponse.user;
		const dataTemplate = `
            <!DOCTYPE html> 
            <html lang="en">
            <head><title>Test</title></head>
            <body>
                <h2>ASCVD Risk</h2><p></p>
                <table>
                <tr>
                    <th>Risk Score: </th>
                    <th>${risk}</th>
				</tr>
				<tr>
					<th>Risk: </th>
					<th>${riskText}</th>
				</tr>
				<tr>
					<th>Note: </th>
					<th>${notes}</th>
				</tr>
                </table>
    
            </body>
            </html>
		`;
		const subject = { reference: `Patient/${tokenResponse.patient}` };
		const author = [{ reference: `Practitioner/${userId}` }];
		const indexed = moment().format();

		return {
			subject,
			resourceType: 'DocumentReference',
			content: [
				{
					attachment: {
						contentType: 'application/xhtml+xml;charset=utf-8',
						data: btoa(dataTemplate),
					},
				},
			],
			type: {
				coding,
			},
			context: {
				encounter: { reference: `Encounter/${tokenResponse.encounter}` },
			},
			author,
			indexed,
			status: 'current',
			docStatus,
			description: 'CDS Summary',
		};
	}
}
