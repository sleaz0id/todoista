module API
  module V1
    class Base < Grape::API
      before { doorkeeper_authorize! }

      helpers API::V1::Helpers::Authorization
      helpers Doorkeeper::Grape::Helpers

      mount API::V1::Todos::Base
    end
  end
end
