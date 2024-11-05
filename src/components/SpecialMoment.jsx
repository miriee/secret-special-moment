import { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

export const SpecialMoment = () => {
    const [souvenir, setSouvenir] = useState({ note: '', date: '' });
    const [souvenirs, setSouvenirs] = useState(JSON.parse(localStorage.getItem("liste")) || []);

    useEffect(() => {
        localStorage.setItem("liste", JSON.stringify(souvenirs));
    }, [souvenirs]);

    const handleChange = ({ target }) => {
        setSouvenir({ note: target.value, date: new Date() });
    };

    const handleAdd = (event) => {
        event.preventDefault();
        if (souvenir.note) { 
            setSouvenirs((prev) => [...prev, souvenir]);
            setSouvenir({ note: '', date: '' }); 
        }
        location.reload();
    };

    return (
        <Form onSubmit={handleAdd}>
            <FloatingLabel controlId="floatingTextarea2" label="Écrivez un moment spécial...">
                <Form.Control
                    as="textarea"
                    placeholder="Laissez un commentaire ici"
                    style={{ height: '200px' }}
                    onChange={handleChange}
                    value={souvenir.note}
                />
            </FloatingLabel>
            <button
                style={{ backgroundColor: '#833b69', border: "none", marginTop: "3%", borderRadius: "3px", paddingBlock: '2%', paddingInline: '4%', color: "#30b8b4", fontWeight: "bold" }}   
            >
                Ajouter
            </button>
        </Form>
    );
};
