import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Back from "../../components/backButton";
import { useNavigate } from "react-router-dom";
import './syle.css'
function ShowBook() {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get(`http://localhost:5000/books/${id}`)
          .then((response) => {
            setBook(response.data.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
    }, []);

    const backToHome = () => {
        navigate('/');
    }

    return (
        <>
            <div className="text-center mt-4 mb-16">
                <Back onClick={backToHome}>Home Page</Back>
            </div>
            <div className="library shadow-lg">
                <div className="title p-4">
                    <div className="book_name font-bold text-2xl">Book Name </div>
                    <div className="book_title text-2xl pl-4">{book.title}</div>
                </div>
                <div className="title p-4">
                    <div className="book_name font-bold text-2xl">Book Author </div>
                    <div className="book_title text-2xl pl-4">{book.author}</div>
                </div>
                <div className="title p-4">
                    <div className="book_name font-bold text-2xl">Book publishYear </div>
                    <div className="book_title text-2xl pl-4">{book.publishYear}</div>
                </div>
                <div className="title p-4">
                    <div className="book_name font-bold text-2xl">Book price </div>
                    <div className="book_title text-2xl pl-4">{book.price}</div>
                </div>
                <div className="title p-4">
                    <div className="book_name font-bold text-2xl">Book description </div>
                    <div className="book_title text-2xl pl-4">{book.description}</div>
                </div>

            </div>

        </>
    );
}

export default ShowBook;
