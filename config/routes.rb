Rails.application.routes.draw do
  use_doorkeeper
  mount API::Base, at: '/'
  mount GrapeSwaggerRails::Engine => '/swagger'
end
