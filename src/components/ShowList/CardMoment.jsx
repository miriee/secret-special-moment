import { Col } from "react-bootstrap";

export const CardMoment = (props) => {
    const { note, date } = props.souvenir;

    return (
        <Col xs={12} md={5} className="card-moment">
            <span style={{marginBottom:"1%", fontWeight:"bold"}}>{date}</span><br />
            <p className="px-3 py-2">{note}</p>
        </Col>
    )
}
