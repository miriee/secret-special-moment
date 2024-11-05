import { useState } from "react"
import { CardMoment } from "./CardMoment"
import { Row } from "react-bootstrap"

export const ListeMoment = () => {
    const [souvenirs, setSouvenirs] = useState(JSON.parse(localStorage.getItem("liste")) || [])

    return (
        <Row>
            <h4>Liste des Souvenirs</h4>
            {souvenirs.length !== 0 ?
                souvenirs.map((souvenir, id) =>
                    <CardMoment key={id} souvenir={souvenir} />
                ) :
                <p>Liste Vide</p>
            }
        </Row>
    )
}
