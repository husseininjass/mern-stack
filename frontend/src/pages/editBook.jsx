import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './syle.css';

function editBook() {
    const { id } = useParams();
    
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [input, updInput] = useState({});

    const InputS = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        updInput((values) => ({ ...values, [name]: value }));
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/books/${id}`)
            .then((res) => {
                setData(res.data.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [id]);

    const editHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/books/${id}`, input)
            .then((_) => {
                navigate('/');
            })
            .catch((error) => {
                console.error("Error submitting data:", error);
            });
    }

    return (
        <div className="add">
            <form onSubmit={editHandler}>
                <div className="add_book">
                    <label>Book Name</label>
                    <input type="text"  name="title" value={data.title|| ""} onChange={InputS} />
                </div>
                <div className="add_book">
                    <label>Author</label>
                    <input type="text" onChange={InputS} name="author" value={data.author || ""} />
                </div>
                <div className="add_book">
                    <label>Book description</label>
                    <input type="text" onChange={InputS} name="description" value={data.description || ""} />
                </div>
                <div className="add_book">
                    <label>PublishYear</label>
                    <input type="text" onChange={InputS} name="publishYear" value={data.publishYear || ""} />
                </div>
                <div className="add_book">
                    <label>Price</label>
                    <input type="text" onChange={InputS} name="price" value={data.price || ""} />
                </div>
                <input type="submit" value="update" className="button" />
            </form>
        </div>
    );
}

export default editBook;
