import React from "react";

import "../styles/NavCategories.css";

const NavCategories = () => {
	return (
		<ul className="nav-categories">
			<li className="nav-categories__item nav-categories__item--xs-only">
				<a href="/">홈</a>
			</li>
			<li className="nav-categories__item explore">
				<a href="/">탐색</a>
			</li>
			<li className="nav-categories__item">
				<a href="/">커리어 성장</a>
			</li>
			<li className="nav-categories__item nav-categories__item--sm-more-visible">
				<a href="/">직군별 연봉</a>
			</li>
			<li className="nav-categories__item nav-categories__item--sm-more-visible">
				<a href="/">이력서</a>
			</li>
			<li className="nav-categories__item nav-categories__item--sm-more-visible">
				<a href="/">매치업</a>
			</li>
			<li className="nav-categories__item nav-categories__item--sm-more-visible">
				<a href="/">프리랜서</a>
			</li>
			<li className="nav-categories__item nav-categories__item--sm-more-visible">
				<a href="/">Ai 합격예측</a>
			</li>
		</ul>
	);
};

export default NavCategories;
