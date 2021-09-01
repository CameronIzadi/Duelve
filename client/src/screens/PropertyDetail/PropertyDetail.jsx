import { Link, useHistory} from 'react-router-dom';
import { getOneProperty } from '../../services/properties'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./PropertyDetail.css"
import PropertyEdit from "../PropertyEdit/PropertyEdit"
// import { deleteProperty } from '../../services/properties'

export default function PropertyDetail(props) {
  const { id } = useParams()
  const [singleProperty, setPropertyData] = useState(null)
  const { handleDelete } = props
  const history = useHistory();


  useEffect(() => {
    const fetchProperty = async () => {
      const singleProperty = await getOneProperty(id)
      console.log(singleProperty)
      setPropertyData(singleProperty);
    }
    fetchProperty();
  }, [id])

  const handleSubmit = async () => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      handleDelete(singleProperty?.id)
      history.push("/")
      document.location.href = "/"
    }
  }
  
  // const handleDelete = async (id) => {
  //   await deleteProperty(id);
  //   setPropertyData((prevState) => prevState.filter((singleProperty) => singleProperty.id !== id));
  // };


  return (
    <div>
    <div className="parent">
      <div className="div1">
        <img className="pic1" src={singleProperty?.picture_1} alt="/" />
      </div>
      <div className="div2">
        <img className="pic2" src={singleProperty?.picture_2} alt="/" />
      </div>
      <div className="div3">
        <img className="pic3" src={singleProperty?.picture_3} alt="/" />
      </div>
      <div className="div4">
        <img className="pic4" src={singleProperty?.picture_4} alt="/" />
      </div>
      <div className="div5">
        <img className="pic5" src={singleProperty?.picture_5} alt="/" />
        </div>
    </div>
      <p>{singleProperty?.street}</p>
      
      <p>Asking Price:{singleProperty?.price}</p>
      
      <p>Beds:{singleProperty?.bed}</p>
      
      <p>Baths:{singleProperty?.bath}</p>
      
      <p>Sqft:{singleProperty?.sqft}</p>

      <p>Seller:{singleProperty?.seller_info}</p>

      <p>Amenities:{singleProperty?.amenities}</p>
      
      <div className="parenteditdelete">
      <button className="deleteDetail" onClick={handleSubmit}>Delete Property</button>

      <Link to={`/properties/${singleProperty?.id}/edit`}>
          <button className="editDetail">
            <PropertyEdit singleProperty={singleProperty}/>
            Edit Property</button>
      </Link>
    </div>

    </div>
  );
}