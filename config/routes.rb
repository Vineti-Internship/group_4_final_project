Rails.application.routes.draw do
  resources :flights
  resources :lane_max_counts
  resources :airplanes
  resources :airlines
  resources :lanes
  resources :tickets
  resources :users
  put '/users/:id' => 'users#update_role'
  post '/users/login' => 'users#login'
  get '/profile' => 'users#profile'
  post '/airplanes/find' => 'airplanes#find'
  #TODO: add PUT route for airplane/find 
  #TODO: add PUT route for lane/find
end
