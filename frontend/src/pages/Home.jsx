import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../components/spinner";
import { Link } from "react-router-dom";
import { FaSquarePlus , FaPen , FaExclamation , FaDeleteLeft } from "react-icons/fa6";
function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/books")
      .then(response => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); 

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8 text-center dark:text-black-900">Book List</h1>
          <Link to="/books/create">
          <FaSquarePlus className="h-8 w-8 "/>
          </Link>
        </div>
        
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center">
                    Book Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Publish Year
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={book._id}>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center text-lg">
                      {book.title}
                    </td>
                    <td className="px-6 py-4 text-center text-lg">
                      {book.author}
                    </td>
                    <td className="px-6 py-4 text-center text-lg">
                      {book.publishYear}
                    </td>
                    <td className="px-6 py-4 text-center text-lg">
                      {book.price}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link to={`/books/edit/${book._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline pl-4"><FaPen /></Link>
                      <Link to={`/books/details/${book._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline pl-4"><FaExclamation className="h-5 w-5"/></Link>
                      <Link to={`/books/delete/${book._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline pl-4"><FaDeleteLeft className="h-5 w-5"/></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        
      </div>
    </>
  );
}

export default Home;
