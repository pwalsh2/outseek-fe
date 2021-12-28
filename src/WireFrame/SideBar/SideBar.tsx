import React from "react";
import "./SideBar-Styles.css";

import SideMenu, { menuItems } from "./SideMenu";
import { useState } from "react";

const SideBar = () => {
	const [inactive, setInactive] = useState(false);
	return (
		<div className='sidebar'>
			<SideMenu
				onCollapse={(inactive) => {
					console.log(inactive);
					setInactive(inactive);
				}}
			/>
		</div>
	);
};

export default SideBar;
