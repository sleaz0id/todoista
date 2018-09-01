require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Todoista
  class Application < Rails::Application
    config.load_defaults 5.2
    config.middleware.use Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: %i[
          get post put delete options
        ]
      end
    end
  end
end
