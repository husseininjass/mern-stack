import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import './syle.css'

function createBook(){
    const navigate = useNavigate();
    const [input , updInput] = useState({});
    const InputHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        updInput(values => ({...values , [name]: value}));
    }
    console.log(input);
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/books' , input)
        .then(_=>{
            navigate('/')
        })
        
    }
    return(
        <>
        <div className="add">
        <form onSubmit={submitHandler} >
                <div className="add_book">
                <label>Book Name</label>
                <input type="text" onChange={InputHandler}  name="title" className=""/>
                </div>
                <div className="add_book"> 
                <label>Author</label>
                <input type="text" onChange={InputHandler}  name="author"/>
                </div>

                <div className="add_book">
                <label>Book description</label>
                <input type="text" onChange={InputHandler}  name="description"/>
                </div>
                <div className="add_book">
                <label>PublishYear</label>
                <input type="text" onChange={InputHandler}  name="publishYear"/>
                </div>
                <div className="add_book">
                <label>Price</label>
                <input type="text" onChange={InputHandler} name="price"/>
                </div>
                <input type="submit" value="Add" className="button"/>
            </form>
        </div>
            
        </>
    )
}
export default createBook