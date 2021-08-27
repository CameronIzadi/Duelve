import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
// import PropertyCreate from "../../screens/PropertyCreate/PropertyCreate";
// import PropertyDetail from "../../screens/PropertyDetail/PropertyDetail";
// import PropertyEdit from "../screens/PropertyEdit";
import Properties from "../screens/Properties";
import Categories from "../screens/Categories";
import { deleteProperty, getAllProperties } from "../../services/properties";
import {  getAllCategories, } from "../../services/categories";

const MainContainer = (props) => {
  const [properties, setProperties] = useState();
  const [categories, setCategories] = useState([]);
  const { currentUser } = props;
  // const history = useHistory();

  useEffect(() => {
    const fetchProperties = async () => {
      const properties = await getAllProperties();
      setProperties(properties);
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getAllCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  // const handleCreate = async (formData) => {
  //   const foodData = await postProperty(formData);
  //   setProperties((prevState) => [...prevState, foodData]);
  //   history.push('/properties');
  // };



  const handleDelete = async (id) => {
    await deleteProperty(id);
    setProperties((prevState) => prevState.filter((property) => property.id !== id));
  };

  // const handleUpdate = async (id, formData) => {
  //   const updatedProperty = await putProperty(id, formData);
  //   setProperties((prevState) =>
  //     prevState.map((property) => {
  //       return property.id === Number(id) ? updatedProperty : property;
  //     })
  //   );
  //   history.push(`/properties`);
  // };

  // const handleCategoryAdd = async (categoryId, propertyId) => {
  //   const updatedProperty = await addCategoryToProperty(categoryId, propertyId);
  //   setProperties((prevState) =>
  //     prevState.map((property) => {
  //       return property.propertyId === Number(propertyId)
  //         ? updatedProperty
  //         : property;
  //     })
  //   );
  //   props.setToggleFetch((prev) => !prev);
  //   history.push(`/properties/${propertyId}`);
  // };





  return (
    <div>
      <Switch>
        <Route path='/categories'>
          <Categories categories={categories} />
        </Route>
        {/* <Route path='/properties/:id/edit'>
          <PropertyEdit properties={properties} handleUpdate={handleUpdate} />
        </Route> */}
        {/* <Route path='/properties/new'>
          <PropertyCreate handleCreate={handleCreate} />
        </Route> */}
        {/* <Route path='/properties/:id'>
          <PropertyDetail categories={categories} />
        </Route> */}
        <Route path='/properties'>
          <Properties
            properties={properties}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  );
  // return (
  //   <Switch>
  //     <Route exact path="/properties/new">
  //       <PropertyCreate
  //         handleCreate={handleCreate}
  //         properties={properties}
  //         setProperties={setProperties}
  //         categories={categories}
  //         handleCategoryAdd={handleCategoryAdd}
  //       />
  //     </Route>
  //     <Route exact path="/properties/:id/edit">
  //       <PropertyEdit
  //         properties={properties}
  //         handleUpdate={handleUpdate}
  //         setProperties={setProperties}
  //         categories={categories}
  //         handleDelete={handleDelete}
  //         handleCategoryAdd={handleCategoryAdd}
  //       />
  //     </Route>
  //     <Route exact path="/properties/:id">
  //       <PropertyDetail properties={properties} categories={categories} />
  //     </Route>
  //     <Route exact path="/properties">
  //       <Properties properties={properties} currentUser={currentUser} handleDelete={handleDelete} />
  //     </Route>
  //     <Route path='/categories'>
  //       <Categories categories={categories}/>
  //     </Route>
  //   </Switch>
  // );
};

export default MainContainer;