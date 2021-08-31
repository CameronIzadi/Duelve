import { Link } from 'react-router-dom';
import "./Layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header id="container">
      <Link to='/'>
        <h1 id="name">Duelve</h1>
      </Link>
      <Link to='/properties/new'>
            <button id="#create">Create</button>
        </Link>
      {currentUser ? (
        <div>
          <p className="user">{currentUser.username}</p>
          <button onClick={handleLogout} className="logout">Logout</button>
        </div>
      ) : (
        <Link to='/login'>Login/Register</Link>
      )}
      <hr />
      {currentUser && (
        <div>
          {/* <Link to='/properties'>Properties</Link>
          <Link to='/categories'>Categories</Link> */}
        </div>
      )}
      {props.children}
    </header>
  );
}