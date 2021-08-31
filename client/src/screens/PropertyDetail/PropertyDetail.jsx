import { Link, useHistory} from 'react-router-dom';
import { getOneProperty } from '../../services/properties'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./PropertyDetail.css"
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
    <div class="parent">
      <div class="div1">
        <img className="pic1" src={singleProperty?.picture_1} alt="/" />
      </div>
      <div class="div2">
        <img className="pic2" src={singleProperty?.picture_2} alt="/" />
      </div>
      <div class="div3">
        <img className="pic3" src={singleProperty?.picture_3} alt="/" />
      </div>
      <div class="div4">
        <img className="pic4" src={singleProperty?.picture_4} alt="/" />
      </div>
      <div class="div5">
        <img className="pic5" src={singleProperty?.picture_5} alt="/" />
      </div>
          <p>{singleProperty?.street}</p>
          <p>{singleProperty?.price}</p>
          <p>{singleProperty?.bed}</p>
          <p>{singleProperty?.bath}</p>
      <p>{singleProperty?.sqft}</p>
      <p>{singleProperty?.seller_info}</p>
          <p>{singleProperty?.amenities}</p>
      <button onClick={handleSubmit}>Delete Property</button>
      <Link to={`/properties/${singleProperty?.id}/edit`}>
        <button>Edit Property</button>
      </Link>
    </div>
  );
}