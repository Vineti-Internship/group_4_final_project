Rails.application.routes.draw do
  resources :lane_max_counts
  resources :airplanes
  resources :airlines
  resources :lanes
  resources :users
  post '/users/login' => 'users#login'
  get '/profile' => 'users#profile'
end
