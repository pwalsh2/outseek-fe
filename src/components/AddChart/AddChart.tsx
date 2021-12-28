import React from "react";
import { Button } from "react-bootstrap";
import ChartModal from "./Modal";

const styles = {
	div_parent: {
		float: "left" as "left",
	},
};
const AddChart = () => {
	const [show, setShow] = React.useState(false);
	return (
		<div style={styles.div_parent}>
			<Button onClick={() => setShow(true)}>Add Chart</Button>
			<ChartModal show={show} setShow={setShow}></ChartModal>
		</div>
	);
};

export default AddChart;
