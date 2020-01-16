# frozen_string_literal: true

FactoryBot.define do
  factory :access_token, class: 'Doorkeeper::AccessToken' do
    application { nil }
    expires_in { 2.hours }
    sequence(:resource_owner_id) { |n| n }
  end
end