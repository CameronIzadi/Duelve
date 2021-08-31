// import { Link } from 'react-router-dom';
import { getOneProperty } from '../../services/properties'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'


export default function PropertyDetail() {
  const { id } = useParams()
  const [singleProperty, setPropertyData] = useState(null)

  useEffect(() => {
    const fetchProperty = async () => {
      const singleProperty = await getOneProperty(id)
      console.log(singleProperty)
      setPropertyData(singleProperty);
    }
    fetchProperty();
  }, [id])

  return (
    <div>
      <p>{singleProperty?.seller_info}</p>
      <img src={singleProperty?.picture_1} alt="/"/>
      <img src={singleProperty?.picture_2} alt="/"/>
      <img src={singleProperty?.picture_3} alt="/"/>
      <img src={singleProperty?.picture_4} alt="/"/>
      <img src={singleProperty?.picture_5} alt="/"/>
          <p>{singleProperty?.street}</p>
          <p>{singleProperty?.price}</p>
          <p>{singleProperty?.bed}</p>
          <p>{singleProperty?.bath}</p>
          <p>{singleProperty?.sqft}</p>
          <p>{singleProperty?.amenities}</p>

    </div>
  );
}