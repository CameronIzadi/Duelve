import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import PropertyCreate from "../screens/PropertyCreate/PropertyCreate"
import PropertyDetail from "../screens/PropertyDetail/PropertyDetail"
import PropertyEdit from "../screens/PropertyEdit/PropertyEdit";
import Properties from "../screens/Properties/Properties";
import Categories from "../screens/Categories/Categories";
import CategorySearch from "../screens/CategorySearch/CategorySearch";
import { deleteProperty, getAllProperties, postProperty, putProperty } from "../services/properties";
import {  getAllCategories, addCategoryToProperty } from "../services/categories";

const MainContainer = (props) => {
  const [properties, setProperties] = useState();
  const [categories, setCategories] = useState([]);
  const { currentUser } = props;
  const history = useHistory();
  const [toggle, setToggle] = useState(true)
  
  useEffect(() => {
    const fetchProperties = async () => {
      const properties = await getAllProperties();
      console.log(properties)
      setProperties(properties);
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getAllCategories();
      console.log(categories)
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  
  const handleCreate = async (formData, id) => {
    const PropertyData = await postProperty(formData);
    setProperties((prevState) => [...prevState, PropertyData]);
    handleCategoryAdd(id, PropertyData.id)
    history.push('/properties');
  };

  const handleDelete = async (id) => {
    await deleteProperty(id);
    setProperties((prevState) => prevState.filter((property) => property.id !== id));
  };

  const handleUpdate = async (id, formData) => {
    const updatedProperty = await putProperty(id, formData);
    setProperties((prevState) =>
      prevState.map((property) => {
        return property.id === Number(id) ? updatedProperty : property;
      })
    );
    history.push(`/properties`);
  };

  const handleCategoryAdd = async (categoryId, propertyId) => {
    console.log(propertyId)
    console.log(categoryId)
    const updatedProperty = await addCategoryToProperty(categoryId, propertyId);
    setProperties((prevState) =>
      prevState.map((property) => {
        return property.propertyId === Number(propertyId)
          ? updatedProperty
          : property;
      })
    );
    setToggle((prev) => !prev);
    history.push(`/properties/${propertyId}`);
  };



  return (
    <div>
      <Switch>
        <Route path='/properties/:id/edit'>
          
          <PropertyEdit handleUpdate={handleUpdate}
            categories={categories} />
          </Route>
      <Route exact path='/categories/:id'>
          <CategorySearch categories={categories} />
        </Route>
        <Route path='/properties/new'>
          <PropertyCreate handleCreate={handleCreate}
            categories={categories}
            handleCategoryAdd={handleCategoryAdd} />
          
  
          
        </Route>
        <Route path='/properties/:id'>
          <PropertyDetail properties={properties} handleDelete={handleDelete}/>
        </Route>
        <Route path='/'>
          <Categories categories={categories} />
        </Route>
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