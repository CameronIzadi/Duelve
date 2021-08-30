import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <Link to='/'>
      <h1>Duelve</h1>
      </Link>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/login'>Login/Register</Link>
      )}
      <hr />
      {currentUser && (
        <div>
          {/* <Link to='/properties'>Properties</Link> */}
          {/* <Link to='/categories'>Categories</Link> */}
        </div>
      )}
      {props.children}
    </header>
  );
}