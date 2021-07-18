import React from "react";
import { AiOutlineRight } from "react-icons/ai";

import "../styles/Overlay.css";

const wdList = [
	{
		id: 0,
		dept: "영업",
		details: [
			"기업영업",
			"외부영업",
			"영업 관리자",
			"기술영업",
			"주요고객사 담당자",
			"솔루션 컨설턴트",
			"해외영업",
		],
	},
	{
		id: 1,
		dept: "미디어",
		details: [
			"콘텐츠 크리에이터",
			"PD",
			"영상 편집가",
			"에디터",
			"비디오 제작",
			"작가",
			"출판 기획자",
		],
	},
	{
		id: 2,
		dept: "인사",
		details: [
			"인사담당",
			"리크루터",
			"조직문화",
			"평가·보상",
			"헤드헌터",
			"HRBP",
			"HRD",
		],
	},
	{
		id: 3,
		dept: "게임 제작",
		details: [
			"게임 기획자",
			"게임 그래픽 디자이너",
			"모바일 게임 개발자",
			"게임 아티스트",
			"게임 클라이언트 개발자",
			"게임 서버 개발자",
			"유니티 개발자",
		],
	},
	{
		id: 4,
		dept: "엔지니어링·설계",
		details: [
			"전자 엔지니어",
			"기계 엔지니어",
			"전기 엔지니어",
			"전기기계 공학자",
			"로봇·자동화",
			"QA 엔지니어",
			"제품 엔지니어",
		],
	},
];

const extraWdList = [
	{
		id: 0,
		dept: "금융",
	},
	{
		id: 1,
		dept: "제조·생산",
	},
	{
		id: 2,
		dept: "물류·무역",
	},
	{
		id: 3,
		dept: "의료·제약·바이오",
	},
	{
		id: 4,
		dept: "교육",
	},
	{
		id: 5,
		dept: "법률·법집행기관",
	},
	{
		id: 6,
		dept: "식·음료",
	},
	{
		id: 7,
		dept: "건설·시설",
	},
	{
		id: 8,
		dept: "공공·복지",
	},
];

const OverlayColumn = ({ dept, details }) => {
	return (
		<div className="overlay__column">
			<a href="/">
				<h2>
					{dept}
					<div className="overlay__right-button">
						<AiOutlineRight />
					</div>
				</h2>
			</a>
			{details.map((detail, i) => (
				<a href="/" key={i}>
					<h3>{detail}</h3>
				</a>
			))}
			<a href="/">
				<h3>
					더보기
					<div className="overlay__right-button">
						<AiOutlineRight />
					</div>
				</h3>
			</a>
		</div>
	);
};

const Overlay = ({ isOverlayShowed }) => {
	return (
		<div className={`overlay ${isOverlayShowed ? "active" : ""}`}>
			<div className="overlay__explore-content">
				<div className="overlay__contents">
					{wdList.map(({ id, dept, details }) => (
						<OverlayColumn key={id} dept={dept} details={details} />
					))}
					<div className="overlay__column">
						{extraWdList.map(({ id, dept }) => (
							<a href="/" key={id}>
								<h2>
									{dept}
									<div className="overlay__right-button">
										<AiOutlineRight />
									</div>
								</h2>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overlay;
