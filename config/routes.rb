Rails.application.routes.draw do
  resources :flights
  resources :lane_max_counts
  resources :airplanes
  resources :airlines
  resources :lanes
  resources :tickets
  resources :users
  put '/users/:id' => 'users#update_role'
  put '/users_role/:id' => 'users#update_role'
  post '/users/login' => 'users#login'
  get '/profile' => 'users#profile'
  post '/airplanes/find' => 'airplanes#find'
  post '/lanes/find' => 'lanes#find'
  post '/flights/search' => 'flights#search_flight'
end