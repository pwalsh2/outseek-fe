import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function ChartModal(props) {
	return (
		<Modal
			show={props.show}
			onHide={() => props.setShow(false)}
			dialogClassName='modal-90w'
			aria-labelledby='example-custom-modal-styling-title'>
			<Modal.Header closeButton>
				<Modal.Title id='example-custom-modal-styling-title'>
					Chart Specifications
				</Modal.Title>
			</Modal.Header>
			<Modal.Body></Modal.Body>
		</Modal>
	);
}
