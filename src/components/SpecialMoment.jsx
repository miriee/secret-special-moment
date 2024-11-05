import { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

export const SpecialMoment = () => {
    const [souvenir, setSouvenir] = useState({})
    const [souvenirs, setSouvenirs] = useState(JSON.parse(localStorage.getItem("liste")) || [])

    const handleChange = ({ target }) => {
        setSouvenir({ note: target.value, date: new Date() })
    }

    const handleAdd = (event) => {
        // event.preventDefault();
        setSouvenirs((prev) => [...prev, souvenir])
        setSouvenir({});
    }

    const addToLocalStorage = () => {
        localStorage.setItem("liste", JSON.stringify(souvenirs));
    }
    useEffect(() => {
        addToLocalStorage();
    }, [souvenirs])

    return (
        <Form>
            <FloatingLabel controlId="floatingTextarea2" label="Écrivez un moment spécial...">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '200px' }}
                    onChange={handleChange}
                    value={souvenir.note || ""}
                />
            </FloatingLabel>
            <button
                style={{ backgroundColor: '#833b69', border: "none", marginTop: "3%", borderRadius: "3px", paddingBlock: '2%', paddingInline: '4%', color: "#30b8b4", fontWeight: "bold" }}
                type="submit"
                onClick={handleAdd}
            >
                Ajouter
            </button>
            {/* <button
                style={{ backgroundColor: '#30b8b4', border: "none", margin: "3%", borderRadius: "3px", paddingBlock: '2%', paddingInline: '4%', color: "#833b69", fontWeight: "bold" }}
                type="submit"
            >
                Liste de souvenirs
            </button> */}
        </Form>
    )
}
