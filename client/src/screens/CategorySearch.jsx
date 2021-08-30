import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getOneCategory } from "../services/categories/getOneCategory"


const CategorySearch = () => {
  const [singleCategory, setCategoryData] = useState(null)
  const { id } = useParams


  useEffect(() => {
    const fetchCategory = async () => {
      const singleCategory = await getOneCategory(id)
      console.log(singleCategory)
      setCategoryData(categoryData);
    }
    fetchCategory();
  }, [id])



  return (
    <div>
        {singleCategory?.properties?.map((properties) => (
          <div key={properties.id}>
            <p>{properties?.street}</p>
            </div>
          ))} 
    </div>
  )
}

export default CategorySearch
