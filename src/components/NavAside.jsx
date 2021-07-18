import React from "react";

import { AiOutlineSearch, AiOutlineBell, AiOutlineMenu } from "react-icons/ai";

import "../styles/NavAside.css";

const NavAside = () => {
	return (
		<aside className="nav-aside">
			<ul className="nav-aside__list">
				<li className="nav-aside__item nav-aside__item--pd-down">
					<button>
						<AiOutlineSearch size="20" />
					</button>
				</li>
				<li className="nav-aside__item nav-aside__item--pd-down">
					<button>
						<AiOutlineBell size="20" />
					</button>
				</li>
				<li className="nav-aside__item nav-aside__item--sm-more-visible">
					<button>
						<div className="nav-aside__avatar-image">성원</div>
					</button>
				</li>
				<li className="nav-aside__item nav-aside__item--sm-more-visible nav-aside__item--left-division">
					<a href="/" className="nav-aside__dashboard-button">
						기업 서비스
					</a>
				</li>
				<li className="nav-aside__item nav-aside__menu-button">
					<button>
						<AiOutlineMenu size="20" />
					</button>
				</li>
			</ul>
		</aside>
	);
};

export default NavAside;
