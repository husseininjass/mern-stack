import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Back from "../../components/backButton";
function DeleteBook() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDeleteBook = () => {
        axios.delete(`http://localhost:5000/books/${id}`)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error("Error deleting book:", error);
            });
    }

    return (
        <div className="p-4">
            <backButton />
            <h1 className="text-3xl my-4">Delete Book</h1>
           
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                <h3 className="text-2xl">Are you sure you want to delete this book?</h3>

                <button
                    className="p-4 bg-red-600 text-white m-8 w-full"
                    onClick={handleDeleteBook}
                >
                    Yes, Delete it
                </button>
            </div>
        </div>
    );
}

export default DeleteBook;
