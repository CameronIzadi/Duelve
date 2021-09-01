import { Link } from 'react-router-dom';
import "./Layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <div className="container">
      <Link to='/'>
        <h1 id="name">Duelve</h1>
      </Link>
      <Link to='/properties/new'>
            <button className="create">Create</button>
        </Link>
      {currentUser ? (
        <div>
          <p className="user">{currentUser.username}</p>
          <button onClick={handleLogout} className="logout">Logout</button>
        </div>
      ) : (
        <Link to='/login'>Login</Link>
        )}
      </div>
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