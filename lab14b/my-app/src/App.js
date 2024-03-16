
import BookList from './components/BookList.js'
import './App.css';


function App() {
  const books = [{title:"hamlet"},{title:"macbeth"}];
 

  return (
    <div className="App">
      <h1>MongoDB Realms Tester</h1>
      <BookList data={books} />
    </div>
  );
}

export default App;
