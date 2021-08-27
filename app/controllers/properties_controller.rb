class PropertiesController < ApplicationController
  before_action :set_property, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /properties
  def index
    @properties = Property.all

    render json: @properties, include: :categories
  end

  # GET /properties/1
  def show
    render json: @property, include: %i[categories user]
  end

  # POST /properties
  def create
    @property = Property.new(property_params)
    @property.user = @current_user
    if @property.save
      render json: @property, status: :created, location: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /properties/1
  def update
    @property = @current_user.articles.find(params[:id])
    if @property.update(property_params)
      render json: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /properties/1
  def destroy
    @property = @current_user.articles.find(params[:id])
    @property.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_property
    @property = Property.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def property_params
    params.require(:property).permit(:street, :price, :bed, :bath, :sqft, :seller_info, :amenities, :picture_1, :picture_2, :picture_3, :picture_4, :picture_5, :user_id)
  end
end
