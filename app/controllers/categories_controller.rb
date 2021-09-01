class CategoriesController < ApplicationController

  # GET /flavors
  def index
    @categories = Category.all

    render json: @categories, include: :properties, status: :ok
  end


  def show
    @category = Category.find(params[:id])
    render json: @category, include: :properties, status: :ok
  end


  # GET /properties/1/categories/2
  def add_to_property
    @property = Property.find(params[:propertyId])
    @category = Category.find(params[:categoryId])

    @property.categories << @category
    render json: @property
  end
end
