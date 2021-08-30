import React from 'react';
import { Link } from "react-router-dom"



export default function Categories(props) {
  const { categories } = props;


  return (
    <div>
      <h3>Categories</h3>
      {categories?.map((category) => (
        <Link to={`/categories/${category.id}`}>
          <p key={category.id}>{category.name}</p>
        </Link>
      ))}
    </div>
  );
}