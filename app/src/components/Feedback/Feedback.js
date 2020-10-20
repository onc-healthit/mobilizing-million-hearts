import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Feedback = (props) => {
	const { show, handleClose, handleSubmit } = props;

	const [feedback, setFeedback] = useState('');
	const [loading, setLoading] = useState(false);
	const [closing, setClosing] = useState(false);

	const title = 'Feedback';
	const heading = 'Your feedback helps us improve the tool';

	const submit = () => {
		setLoading(true);
		handleSubmit(feedback).then(() => {
			setClosing(true);
			setLoading(false);
			setTimeout(() => {
				setClosing(false);
				handleClose();
			}, 1500);
		});
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{heading}</p>

				<textarea
					type="text"
					value={feedback}
					onChange={(event) => setFeedback(event.target.value)}
					rows="4"
					style={{ width: '100%' }}
				/>
			</Modal.Body>
			<Modal.Footer>
				{closing ? <p style={{ float: 'left', color: 'green' }}>Thank you! Closing...</p> : null}
				<Button variant="secondary" disabled={loading || closing} onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" disabled={loading || closing || feedback === ''} onClick={submit}>
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Feedback;
