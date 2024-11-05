import { Col } from "react-bootstrap";

export const CardMoment = (props) => {
    const { note, date } = props.souvenir;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    return (
        <Col xs={12} md={5} className="card-moment">
            <span style={{marginBottom:"1%", fontWeight:"bold"}}>{formatDate(date)}</span><br />
            <p className="px-3 py-2">{note}</p>
        </Col>
    )
}
