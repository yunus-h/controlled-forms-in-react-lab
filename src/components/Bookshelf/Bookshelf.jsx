import { useState } from 'react';
// import '../../index.css';

const Bookshelf = () => {


    const [books, setBooks] = useState([]);

    const initState = {
        title: '', 
        author: ''
    }

    const [newBook, setNewBook] = useState(initState);
    
    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value}) 
        console.log('new book: ' + {newBook});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook])

        console.log('books: ' + {books});

        setNewBook (initState);
        
    }
      
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                
                <h3>Add a Book</h3>
               
                {/* Form will go here */}
                <form onSubmit= {handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input 
                    type ="text" 
                    name ="title"
                    id="title"
                    value = {newBook.title}
                    onChange={handleInputChange} 
                    />
                    <br />

                    <label htmlFor="author">Author: </label>
                    <input 
                    type ="text" 
                    name ="author"
                    id="author"
                    value = {newBook.author}
                    onChange={handleInputChange} 
                    />  
                    <br /> 
                    <br />
                    <button>Add Book</button>

                </form>
            </div>
            
            <div className= "bookCardsDiv">
                {
                books.map((book, idx) => (
                    <div className= "bookCard" key = {idx}> 
                            <p><strong>{book.title}</strong></p>
                            <p>by {book.author}</p>
                    </div>
                ))}
                
            </div>
        </div>
    )    
}

export default Bookshelf;