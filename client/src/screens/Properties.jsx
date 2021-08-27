import { Link } from 'react-router-dom';

export default function Properties(props) {
  const { properties, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Properties</h3>
      {properties.map((property) => (
        <div key={property.id}>
          <Link to={`/properties/${property.id}`}>
            <p>{property.name}</p>
          </Link>
          {currentUser?.id === property.user_id && (
            <div>
              <Link to={`/properties/${property.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(property.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      <Link to='/properties/new'>
        <button>Create</button>
      </Link>
    </div>
  );
}