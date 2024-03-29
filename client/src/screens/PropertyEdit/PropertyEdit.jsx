import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { getOneProperty } from '../../services/properties'

export default function PropertyCreate(props) {
  const [formData, setFormData] = useState({
    street: '',
    price: 0,
    bed: 0,
    bath: 0,
    sqft: 0,
    seller_info: '',
    amenities: '',
    picture_1: '',
    picture_2: '',
    picture_3: '',
    picture_4: '',
    picture_5: '',
  });

  const { handleUpdate } = props;
  const { id } = useParams()  
  
  useEffect(() => {
    const fetchProperty = async () => {
      const singleProperty = await getOneProperty(id)
      console.log(singleProperty)
      setFormData({
        street: singleProperty.street,
        price: singleProperty.price,
        bed: singleProperty.bed,
        bath: singleProperty.bath,
        sqft: singleProperty.sqft,
        seller_info: singleProperty.seller_info,
        amenities: singleProperty.amenities,
        picture_1: singleProperty.picture_1,
        picture_2: singleProperty.picture_2,
        picture_3: singleProperty.picture_3,
        picture_4: singleProperty.picture_4,
        picture_5: singleProperty.picture_5,
      });
    }
    fetchProperty();
  }, [id])

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const updateProperty = await putProperty(id, selectedProperty);
  //   setUpdateProperty(updateProperty)
  // }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Edit Property</h3>
      <label>
        Street
        <input type='text' name='street' value={formData.street} onChange={handleChange} />
      </label>
      <label>
        Price
        <input type='number' name='price' value={formData.price} onChange={handleChange} />
      </label>
      <label>
        Bed
        <input type='number' name='bed' value={formData.bed} onChange={handleChange} />
      </label>
      <label>
        Bath
        <input type='number' name='bath' value={formData.bath} onChange={handleChange} />
      </label>
      <label>
        Sqft
        <input type='number' name='sqft' value={formData.sqft} onChange={handleChange} />
      </label>
      <label>
        Seller Info
        <input type='text' name='seller_info' value={formData.seller_info} onChange={handleChange} />
      </label>
      <label>
        Amenities
        <input type='text' name='amenities' value={formData.amenities} onChange={handleChange} />
      </label>
      <label>
        Picture 1
        <input type='text' name='picture_1' value={formData.picture_1} onChange={handleChange} />
      </label>
      <label>
        Picture_2
        <input type='text' name='picture_2' value={formData.picture_2} onChange={handleChange} />
      </label>
      <label>
        Picture_3
        <input type='text' name='picture_3' value={formData.picture_3} onChange={handleChange} />
      </label>
      <label>
        Picture_4
        <input type='text' name='picture_4' value={formData.picture_4} onChange={handleChange} />
      </label>
      <label>
        Picture_5
        <input type='text' name='picture_5' value={formData.picture_5} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
