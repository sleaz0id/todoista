require 'rails_helper'

describe API::V1::Todos::Toggle, type: :request do
  subject { patch endpoint, headers: authenticated_headers }

  let!(:todo) { create(:todo, text: 'foo', completed: false, user: user) }
  let(:endpoint) { "/api/v1/todos/#{todo_id}/toggle" }
  let(:authenticated_headers) { authenticated_headers_for(user) }
  let(:todo_id) { todo.id }
  let(:user) { create(:user) }

  let(:response_body) do
    {
      id: todo.id,
      text: 'foo',
      completed: true,
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

  context 'todo has been completed' do
    let(:todo) { create(:todo, completed: true, user: user) }
    let(:response_body) do
      {
        id: todo.id,
        text: todo.text,
        completed: false
      }
    end

    it 'responds with valid body' do
      subject
      expect(response.body).to eq(response_body.to_json)
    end
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
