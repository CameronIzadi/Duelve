import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getOneCategory } from '../services/categories'
import { Link } from "react-router-dom"

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
      <Link to={`/properties/${properties.id}`}>
            <p>{properties?.street}</p>
            <p>{properties?.bed}</p>
            <p>{properties?.bath}</p>
            <p>{properties?.sqft}</p>
              <p>{properties?.price}</p>
        </Link>
            </div>
          ))} 
    </div>
  )
}

export default CategorySearch
