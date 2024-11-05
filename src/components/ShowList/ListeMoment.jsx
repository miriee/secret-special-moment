import { useEffect, useState } from "react"
import { CardMoment } from "./CardMoment"
import { Row } from "react-bootstrap"

export const ListeMoment = () => {
    const [souvenirs, setSouvenirs] = useState([]);

    useEffect(() => {
        const liste = JSON.parse(localStorage.getItem("liste")) || [];
        const sortedListe = liste.sort((a, b) => new Date(b.date) - new Date(a.date));
        setSouvenirs(sortedListe);
    }, []);

    const handleDelete = (id) => {
        const updatedSouvenirs = souvenirs.filter((_, index) => index !== id);
        setSouvenirs(updatedSouvenirs);
        localStorage.setItem("liste", JSON.stringify(updatedSouvenirs));
    };

    return (
        <Row>
            <h4>Liste des Souvenirs</h4>
            {souvenirs.length !== 0 ?
                souvenirs.map((souvenir, id) =>
                    <CardMoment key={id} souvenir={souvenir} onDelete={() => handleDelete(id)}/>
                ) :
                <p>Liste Vide</p>
            }
        </Row>
    )
}
