import {Col, Row} from "react-bootstrap";
import style from "../styles/ParameterView.module.css";

export default function ParameterView(props) {
	return (
		<div className="px-3 overflow-hidden">
			{Object.keys(props.objs).map((a, i) => (
				<Row key={i} xs={2} className="mb-4 align-items-center">
					<Col xs={"auto"} className={style.parameterName}>
						{props.objs[i]["name"]}
					</Col>
					<Col className={style.parameterValueBox}>
						<div className={style.parameterValue}>{props.objs[i]["val"]}</div>
					</Col>
				</Row>
			))}
		</div>
	);
}