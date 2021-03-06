require 'grape-swagger'

module API
  class Base < Grape::API
    prefix :api

    mount API::V1::Base

    add_swagger_documentation(
      mount_path: '/docs',
      produces: 'application/vnd.api+json',
      security_definitions: {
        api_key: { type: "oauth2", name: "Authorization", in: "header" }
      }
    )
  end
end
