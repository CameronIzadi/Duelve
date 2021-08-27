import api from "./api-config";

export const getAllCategories = async () => {
  const resp = await api.get("/categories");
  return resp.data;
};

export const addCategoryToProperty = async (categoryId, propertyId) => {
  const resp = await api.put(`/categories/${categoryId}/properties/${propertyId}`);
  return resp.data;
};