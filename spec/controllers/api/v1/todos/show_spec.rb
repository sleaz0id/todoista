require 'rails_helper'

describe API::V1::Todos::Show, type: :request do
  subject { get endpoint, headers: headers }

  let(:endpoint) { "/api/v1/todos/#{todo_id}" }
  let(:headers) { { 'Accept' => 'application/vnd.api+json' } }
  let(:todo_id) { todo.id }
  let(:todo) { create(:todo) }

  let(:response_body) do
    {
      id: todo.id,
      text: todo.text,
      completed: false,
    }
  end

  it 'responds with success' do
    subject
    expect(response).to have_http_status(:ok)
  end

  it 'responds with valid body' do
    subject
    expect(response.body).to eq(response_body.to_json)
  end

  context 'when todo is missing' do
    let(:todo_id) { 9999 }
    let(:error_msg) { { 'error' => "Couldn't find Todo with 'id'=9999" } }

    it 'returns 404 status' do
      subject
      expect(response).to have_http_status(:not_found)
    end

    it 'responds with proper body' do
      subject
      expect(response.body).to eq(error_msg.to_json)
    end
  end
end
