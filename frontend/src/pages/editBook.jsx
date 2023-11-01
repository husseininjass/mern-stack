import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './syle.css'; // Correct the typo in the import statement
import Back from "../../components/backButton";

function EditBook() {
    const { id } = useParams();
    
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [input, setInput] = useState({}); // Changed the state variable name to setInput

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }));
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/books/${id}`)
            .then((res) => {
                setData(res.data.data);
                setInput(res.data.data); // Initialize input with the fetched data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [id]);

    const editHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/books/edit/${id}`, input)
            .then((_) => {
                navigate('/');
            })
            .catch((error) => {
                console.error("Error submitting data:", error);
            });
    }
    const click = ()=>{
        navigate('/')
    }
    return (
        <>
                    <div className="add">
            <form onSubmit={editHandler}>
                <div className="add_book">
                    <label>Book Name</label>
                    <input type="text" name="title" value={input.title || ""} onChange={inputChangeHandler} />
                </div>
                <div className="add_book">
                    <label>Author</label>
                    <input type="text" onChange={inputChangeHandler} name="author" value={input.author || ""} />
                </div>
                <div className="add_book">
                    <label>Book description</label>
                    <input type="text" onChange={inputChangeHandler} name="description" value={input.description || ""} />
                </div>
                <div className="add_book">
                    <label>PublishYear</label>
                    <input type="text" onChange={inputChangeHandler} name="publishYear" value={input.publishYear || ""} />
                </div>
                <div className="add_book">
                    <label>Price</label>
                    <input type="text" onChange={inputChangeHandler} name="price" value={input.price || ""} />
                </div>
                <input type="submit" value="update" className="button" />
            </form>
        </div>
        </>

    );
}

export default EditBook;
