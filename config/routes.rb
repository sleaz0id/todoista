Rails.application.routes.draw do
  use_doorkeeper
  mount API::Base, at: '/'
  mount GrapeSwaggerRails::Engine => '/swagger'

  root 'pages#home'
  match '*path', to: 'pages#home', via: :all
end
