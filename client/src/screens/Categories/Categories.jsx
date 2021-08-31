import React from 'react';
import { Link } from "react-router-dom"



export default function Categories(props) {
  const { categories } = props;


  return (
    <div>
      <h3>Categories</h3>
      {categories?.map((category) => (
        <div key={category.id}>
        <Link to={`/categories/${category.id}`}>
            <p key={category.id}>{category.name}</p>
            {/* <h2>{category[0]?.picture_1}</h2> */}
          </Link>
        </div>
      ))}
    </div>
  );
}