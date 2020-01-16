# frozen_string_literal: true

module Helpers
  module ApiHelpers
    def authenticated_headers_for(user)
      access_token = create(:access_token, resource_owner_id: user.id).token
      {
        "Accept" => "application/vnd.api+json"
      }.merge!("Authorization" => "Bearer #{access_token}")
    end
  end
end