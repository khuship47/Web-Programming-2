import './BookList.css';

const BookList = (props) => {
    console.log(props.data);
    return (
        <ul className="bookList">
        { props.data.map(d => <li>{d.title}</li>)}
        </ul>        
    );
};


export default BookList;