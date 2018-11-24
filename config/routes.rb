Rails.application.routes.draw do
  get 'discover/index'
  get 'player/:id', to: 'player#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
