Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :itineraries, except: :create
  resources :trips do 
    resources :itineraries, only: :create
  end
  resources :users, only: :create
end
