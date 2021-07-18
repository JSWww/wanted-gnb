import React, { useState } from "react";

import NavCategories from "./NavCategories";
import Overlay from "./Overlay";
import NavAside from "./NavAside";
import Search from "./Search";

import "../styles/Header.css";

const Header = () => {
	const [isOverlayShowed, setIsOverlayShowed] = useState(false);

	const handleMouseOver = (e) => {
		if (
			e.target.closest(".explore") ||
			e.target.closest(".overlay__explore-content")
		) {
			setIsOverlayShowed(true);
		} else if (
			e.target.closest(".nav-categories__item") ||
			e.target.closest(".overlay")
		) {
			setIsOverlayShowed(false);
		}
	};

	return (
		<div className="header" onMouseOver={handleMouseOver}>
			<div className="header__contents">
				<nav className="header__nav">
					<div className="header__logo">
						<div className="logo">
							<a href="/">wanted</a>
						</div>
					</div>
					<NavCategories />
					<Overlay isOverlayShowed={isOverlayShowed} />
					<NavAside />
					{/* <Search /> */}
				</nav>
			</div>
		</div>
	);
};

export default Header;
