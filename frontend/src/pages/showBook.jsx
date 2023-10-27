import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Back from "../../components/backButton";
import { useNavigate } from "react-router-dom";

function ShowBook() {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get(`http://localhost:5000/books/${id}`)
          .then((response) => {
            setBook(response.data.data);
            console.log(book);
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
            <div className="text-center mt-4">
                <Back onClick={backToHome}>Home Page</Back>
            </div>
            <div className="text-lg font-semibold mt-2">{book.title}</div>
            <div className="text-base mt-2">{book.author}</div>
            <div className="text-base mt-2">{book.description}</div>
            <div className="text-base mt-2">{book.publishYear}</div>
            <div className="text-2xl text-red-600 mt-4">{book.price}</div>
        </>
    );
}

export default ShowBook;
