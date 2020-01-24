require 'rails_helper'

describe API::V1::Todos::Index, type: :request do
  subject { get endpoint, headers: authenticated_headers }

  let(:endpoint) { '/api/v1/todos' }
  let(:authenticated_headers) { authenticated_headers_for(user) }
  let!(:todo) { create(:todo, text: 'foo', user: user) }
  let!(:user) { create(:user) }

  let(:response_body) do
    [
      {
        id: todo.id,
        text: 'foo',
        completed: false,
      },
    ]
  end

  it 'responds with success' do
    subject
    expect(response).to have_http_status(:ok)
  end

  it 'responds with valid body' do
    subject
    expect(response.body).to eq(response_body.to_json)
  end
end
