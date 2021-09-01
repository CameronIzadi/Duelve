Rails.application.routes.draw do
  resources :properties
  resources :users
  resources :categories
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  put '/categories/:categoryId/properties/:propertyId',
  to: 'categories#add_to_property'
end
