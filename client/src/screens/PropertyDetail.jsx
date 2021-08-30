// import { Link } from 'react-router-dom';
import { getOneProperty } from '../services/properties'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'


export default function PropertyDetail() {
  const { id } = useParams()
  const [singleProperty, setPropertyData] = useState(null)

  useEffect(() => {
    const fetchProperty = async () => {
      const singleProperty = await getOneProperty(id)
      setPropertyData(singleProperty);
    }
    fetchProperty();
  }, [id])



  return (
    <div>
      <h3>PropertyDetail</h3>
      {singleProperty.properties?.map((property) => (
        <div key={property.id}>
          <p>{property.street}</p>
          <p>{property.price}</p>
          <p>{property.bath}</p>
          <p>{property.bath}</p>
          <p>{property.sqft}</p>
        </div>
      ))}
    </div>
  );
}