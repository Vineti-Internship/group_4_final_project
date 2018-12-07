Rails.application.routes.draw do
  resources :flights
  resources :users
  post '/users/login' => 'users#login'
  get '/profile' => 'users#profile'
end
