import React, { useRef, useState } from "react";

/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
	const { name, subMenus, iconClassName, onClick, to, exact } = props;
	const [expand, setExpand] = useState(false);

	return (
		<li>
			<li
				onClick={() => {
					setExpand((e) => !e);
				}}
				className={`menu-item`}>
				<div className='menu-icon'>
					<i className={iconClassName}></i>
				</div>
				<span>{name}</span>
			</li>
			{subMenus.length > 0 ? (
				<ul className={`sub-menu`}>
					{subMenus.map((menu, index) => (
						<li key={index}>{menu.name}</li>
					))}
				</ul>
			) : null}
		</li>
	);
};

export default MenuItem;
