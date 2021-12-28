import React, { useEffect, useState } from "react";
import logo from "./assets/logo/webscript.png";
import user from "./assets/user.jpg";

import MenuItem from "./MenuItem";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
	{
		name: "Market",
		exact: true,
		to: "/",
		iconClassName: "bi bi-speedometer2",
		subMenus: [
			{ name: "Overview", to: "/content/courses" },
			{ name: "Economics", to: "/content/videos" },
			{ name: "Calendars", to: "/content/videos" },
		],
	},
	{
		name: "Financial Tools",
		exact: true,
		to: `/content`,
		iconClassName: "bi bi-speedometer2",
		subMenus: [
			{ name: "Screener", to: "/content/courses" },
			{ name: "Charting", to: "/content/courses" },
		],
	},
	{
		name: "Analysis",
		exact: true,
		to: `/content`,
		iconClassName: "bi bi-speedometer2",
		subMenus: [
			{ name: "Company Overview", to: "/content/courses" },
			{ name: "Financial Statements", to: "/content/courses" },
			{ name: "Financial Ratios", to: "/content/courses" },
			{ name: "Social Sentiment", to: "/content/courses" },
			{ name: "Ownership", to: "/content/courses" },
			{ name: "Insider Trade Activity", to: "/content/videos" },
		],
	},
];

const SideMenu = (props) => {
	const [inactive, setInactive] = useState(false);

	useEffect(() => {
		if (inactive) {
			removeActiveClassFromSubMenu();
		}

		props.onCollapse(inactive);
	}, [inactive]);

	//just an improvment and it is not recorded in video :(
	const removeActiveClassFromSubMenu = () => {
		document.querySelectorAll(".sub-menu").forEach((el) => {
			el.classList.remove("active");
		});
	};

	/*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
	useEffect(() => {
		let menuItems = document.querySelectorAll(".menu-item");
		menuItems.forEach((el) => {
			el.addEventListener("click", (e) => {
				const next = el.nextElementSibling;
				if (next !== null) {
					next.classList.toggle("active");
				}
			});
		});
	}, []);

	return (
		<div className={`side-menu ${inactive ? "inactive" : ""}`}>
			<div className='top-section'>
				<div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>
					{inactive ? (
						<i className='bi bi-arrow-right-square-fill'>T</i>
					) : (
						<i className='bi bi-arrow-left-square-fill'>T</i>
					)}
				</div>
			</div>

			<div className='search-controller'>
				<button className='search-btn'>
					<i className='bi bi-search'></i>
				</button>

				<input type='text' placeholder='search' />
			</div>

			<div className='divider'></div>

			<div className='main-menu'>
				<ul>
					{menuItems.map((menuItem, index) => (
						<MenuItem
							key={index}
							name={menuItem.name}
							exact={menuItem.exact}
							to={menuItem.to}
							subMenus={menuItem.subMenus || []}
							iconClassName={menuItem.iconClassName}
							onClick={(e) => {
								if (inactive) {
									setInactive(false);
								}
							}}
						/>
					))}

					{/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
				</ul>
			</div>
		</div>
	);
};

export default SideMenu;
