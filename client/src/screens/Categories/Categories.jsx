import React from 'react';
import { Link } from "react-router-dom"
import './Categories.css'



export default function Categories(props) {
  const { categories } = props;


  return (
    <div>
      <div className="welcomeDiv">
        <h2 className="welcome"> Welcome! Please Select A Category to Begin Searching.</h2>
      </div>
      <h3>Categories</h3>
      {categories?.map((category) => (
        <div key={category.id}>
        <Link to={`/categories/${category.id}`}>
            <p className="categoryName" skey={category.id}>{category.name}</p>
            {/* <h2>{category[0]?.picture_1}</h2> */}
          </Link>
        </div>
      ))}
    </div>
  );
}