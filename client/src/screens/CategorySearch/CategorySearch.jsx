import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getOneCategory } from '../../services/categories'
import { Link } from "react-router-dom"
import './CategorySearch.css'

const CategorySearch = () => {
  const [singleCategory, setCategoryData] = useState(null)
  const { id } = useParams()


  useEffect(() => {
    const fetchCategory = async () => {
      const singleCategory = await getOneCategory(id)
      setCategoryData(singleCategory);
    }
    fetchCategory();
  }, [id])


  return (
    <div>
        {singleCategory?.properties?.map((properties) => (
          <div key={properties.id}>
            <div className="classesRoot">
              <Link to={`/properties/${properties.id}`}>
                <img className="classesCover" src={properties?.picture_1} alt="" />
              </Link>
            <div className="classesContent">
            <h2 className="street">{properties?.street}</h2>
            <h2 className="bed">Beds: {properties?.bed}</h2>
            <h2 className="bath">Baths: {properties?.bath}</h2>
            <h2 className="sqft">Sqft: {properties?.sqft}</h2>
            <h2 className="price">Asking Price: {properties?.price}</h2>
            </div>
            </div>
            <hr />
          </div>
        ))}
    </div>
  )
}

export default CategorySearch
