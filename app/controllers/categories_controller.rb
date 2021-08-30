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
  def add_category_to_property
    @property = Property.find(params[:id])
    @category = Category.find(params[:category_id])

    @property.categories << @category
  end
end
