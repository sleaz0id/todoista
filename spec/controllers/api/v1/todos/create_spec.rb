require 'rails_helper'

describe API::V1::Todos::Create, type: :request do
  subject { post endpoint, params: params, headers: headers }

  let(:endpoint) { '/api/v1/todos' }
  let(:params) { { text: 'foo bar' } }
  let(:headers) { { 'Accept' => 'application/vnd.api+json' } }
  let(:todo) { create(:todo, text: 'foo bar') }

  let(:response_body) do
    {
      id: todo.id,
      text: todo.text,
      completed: todo.completed,
    }
  end

  before { allow(Todo).to receive(:create).and_return(todo) }

  it 'responds with success' do
    subject
    expect(response).to have_http_status(:created)
  end

  it 'responds with valid body' do
    subject
    expect(response.body).to eq(response_body.to_json)
  end
end
