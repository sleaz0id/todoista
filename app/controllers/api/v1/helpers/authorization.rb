require "doorkeeper/grape/helpers"

module API
  module V1
    module Helpers
      module Authorization
        extend ::Grape::API::Helpers
        include Doorkeeper::Grape::Helpers

        def current_user
          return if doorkeeper_token.nil? || !doorkeeper_token.accessible?
          @current_user ||= User.find(doorkeeper_token.resource_owner_id)
        end

        def doorkeeper_render_error_with(error)
          case error.status
          when :unauthorized
            error!("Unauthorized", 401)
          when :forbidden
            error!("Forbidden", 403)
          end
        end
      end
    end
  end
end
