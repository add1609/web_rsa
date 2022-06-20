import style from "../styles/Keygen.module.css";
import {useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import KeygenCard from "../components/KeygenCard";
import useFetchKey from "../data/useFetchKey";
import ParameterView from "../components/ParameterView";

export default function Keygen() {
	const [bitlen, setBitlen] = useState(0);
	const [shouldFetchKey, setShouldFetchKey] = useState(false);
	const keyUrl = "http://64.225.92.210:8000/gen/keypair/";
	const {
		keyData,
		keyLoading,
		keyTimeout
	} = useFetchKey(keyUrl + bitlen.toString(), 123, shouldFetchKey, setShouldFetchKey);
	return (
		<div style={{minHeight: "100vh"}}>
			<Row xs={1} xl={2} className="g-lg-3 m-lg-5 g-2 m-2">
				<Col>
					<KeygenCard len={bitlen} dis={keyTimeout} setLen={setBitlen} handler={() => {
						setShouldFetchKey(true);
					}}/>
				</Col>
				<Col>
					<Card>
						<Card.Header className={style.cardHeader}>
							<div>
								<span>Schritt 1 Ausgabe</span>
							</div>
						</Card.Header>
						<Card.Body className={style.cardBody}>
							<>
								{!keyLoading &&
									<>{keyData &&
										<ParameterView
											objs={[{"name": "p:", "val": keyData["p"]},
												{"name": "q:", "val": keyData["q"]},
												{"name": "n:", "val": keyData["n"]},
												{"name": "e:", "val": keyData["e"]},
												{"name": "d:", "val": keyData["d"]}]}
										/>}
									</>
								}
							</>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
