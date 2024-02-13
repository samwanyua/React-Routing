import { Link } from "react-router-dom";
const Booklist = () => {
    return ( 
        <>
            <h3>Here is a list of Books!</h3>
            <Link to="/books/1">Book 1</Link>
            <br />
            <Link to="/books/2">Book 2</Link>
            <br />
            <Link to="/books/knew">New Book</Link>
        </>
     );
}
 
export default Booklist;