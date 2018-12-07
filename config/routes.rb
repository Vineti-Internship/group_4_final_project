Rails.application.routes.draw do
  resources :users
  post '/users/login' => 'users#login'
  get '/profile' => 'users#profile'
end
