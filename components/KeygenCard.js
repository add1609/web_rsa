import {Button, Card, Col, Dropdown, Row} from "react-bootstrap";
import style from "../styles/Keygen.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

export default function KeygenCard(props) {
	return (
		<Card>
			<Card.Header className={style.cardHeader}>
				<div>
					<span>Schritt 1</span>
				</div>
			</Card.Header>
			<Card.Body className={style.cardBody}>
				<Row className="justify-content-evenly align-items-center">
					<Col xs={"auto"}>
						<div className={style.code} style={{backgroundColor: "white"}}>
							Wähle deine bitlänge:
						</div>
					</Col>
					<Col xs={"auto"} md>
						<Dropdown className={style.KeygenGroup}>
							<Dropdown.Toggle id="dropdown-autoclose-true">
								{props.len < 31 &&
									<span>len(N)</span>}
								{props.len > 31 &&
									props.len.toString()}
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item onClick={() => props.setLen(32)}>32</Dropdown.Item>
								<Dropdown.Item onClick={() => props.setLen(64)}>64</Dropdown.Item>
								<Dropdown.Item onClick={() => props.setLen(256)}>256</Dropdown.Item>
								<Dropdown.Item onClick={() => props.setLen(512)}>512</Dropdown.Item>
								<Dropdown.Item onClick={() => props.setLen(1024)}>1024</Dropdown.Item>
								<Dropdown.Item onClick={() => props.setLen(2048)}>2048</Dropdown.Item>
								<Dropdown.Item onClick={() => props.setLen(4096)}>4096</Dropdown.Item>
							</Dropdown.Menu>
							<Button variant="success" disabled={props.dis}
									onClick={props.handler}>
								<FontAwesomeIcon icon={faCheck}/>
							</Button>
						</Dropdown>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}