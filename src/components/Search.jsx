import React from "react";
import {
	AiOutlineSearch,
	AiOutlineRight,
	AiOutlineClose,
} from "react-icons/ai";

import "../styles/Search.css";

const tagList = [
	{
		id: 0,
		tagName: "#사택",
	},
	{
		id: 1,
		tagName: "#퇴사율5%이하",
	},
	{
		id: 2,
		tagName: "#설립3년이하",
	},
	{
		id: 3,
		tagName: "#연봉상위2~5%",
	},
	{
		id: 4,
		tagName: "#원격근무",
	},
];

const Search = () => {
	return (
		<div className="search">
			<div className="search__contents">
				<form className="search__form">
					<input
						className="search__input"
						placeholder="#태그, 회사, 포지션 검색"
					/>
					<AiOutlineSearch className="search__icon" />
					<button className="search__close-button">
						<AiOutlineClose size="20" />
					</button>
				</form>
				<div className="search__tag-container">
					<div className="search__tag-content">
						<h4 className="search__title">추천태그로 검색해보세요</h4>
						<a href="/" className="search__go-company-tag">
							기업태그 홈 이동하기
							<AiOutlineRight />
						</a>
						<ul className="search__tag-list">
							{tagList.map(({ id, tagName }) => (
								<li className="search__tag-item" key={id}>
									<button className="search__tag-button">{tagName}</button>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="search__dim"></div>
			</div>
		</div>
	);
};

export default Search;
