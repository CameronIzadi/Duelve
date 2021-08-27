import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import PropertyCreate from "../../screens/PropertyCreate/PropertyCreate";
import PropertyDetail from "../../screens/PropertyDetail/PropertyDetail";
import PropertyEdit from "../../screens/PropertyEdit/PropertyEdit";
import Home from "../../screens/Home/Home";
import { destroyProperty, getAllProperties, postProperty, putProperty, } from "../../services/properties";
import { addCategoryToProperty, getAllCategories, } from "../../services/categories";

const MainContainer = (props) => {
  const [properties, setProperties] = useState();
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchProperties = async () => {
      const properties = await getAllProperties();
      setProperties(properties);
    };
    fetchProperties();
  }, [props.toggleFetch]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getAllCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  const handleCreate = async (formData, categoryId) => {
    const newProperty = await postProperty(formData);
    setProperties((prevState) => [...prevState, newProperty]);
    handleCategoryAdd(categoryId, newProperty.id);
    history.push("/");
  };

  const handleDelete = async (id) => {
    await destroyProperty(id);
    setProperties((prevState) =>
      prevState.filter((property) => property.id !== id)
    );
    props.setToggleFetch((prev) => !prev);
    history.push("/");
  };

  const handleUpdate = async (id, formData) => {
    const updatedProperty = await putProperty(id, formData);
    setProperties((prevState) =>
      prevState.map((property) => {
        return property.id === Number(id) ? updatedProperty : property;
      })
    );
    history.push(`/properties/${id}`);
  };

  const handleCategoryAdd = async (categoryId, propertyId) => {
    const updatedProperty = await addCategoryToProperty(categoryId, propertyId);
    setProperties((prevState) =>
      prevState.map((property) => {
        return property.propertyId === Number(propertyId)
          ? updatedProperty
          : property;
      })
    );
    props.setToggleFetch((prev) => !prev);
    history.push(`/properties/${propertyId}`);
  };

  return (
    <Switch>
      <Route exact path="/properties/new">
        <PropertyCreate
          handleCreate={handleCreate}
          properties={properties}
          setProperties={setProperties}
          categories={categories}
          handleCategoryAdd={handleCategoryAdd}
        />
      </Route>
      <Route exact path="/properties/:id/edit">
        <PropertyEdit
          properties={properties}
          handleUpdate={handleUpdate}
          setProperties={setProperties}
          categories={categories}
          handleDelete={handleDelete}
          handleCategoryAdd={handleCategoryAdd}
        />
      </Route>
      <Route exact path="/properties/:id">
        <PropertyDetail properties={properties} categories={categories} />
      </Route>
      <Route exact path="/">
        <Home properties={properties} categories={categories} />
      </Route>
    </Switch>
  );
};

export default MainContainer;