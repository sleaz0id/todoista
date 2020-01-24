require 'rails_helper'

RSpec.describe Todos::Toggle do
  subject { described_class.new(user_id, todo.id).call }

  let!(:todo) { create(:todo, completed: false, user: user) }
  let(:user_id) { user.id }
  let(:user) { create(:user) }

  describe 'validation' do
    context 'when todo_id is missing' do
      subject { described_class.new(user_id).call }

      it 'raises ArgumentError' do
        expect { subject }.to raise_error(ArgumentError)
      end
    end

    context 'when user_id has invalid type' do
      let(:user_id) { 'asdfq' }

      it 'raises Dry::Types::ConstraintError' do
        expect { subject }.to raise_error(Dry::Types::ConstraintError)
      end
    end
  end

  context 'when todo belongs to the user' do
    it { is_expected.to be_success }

    it 'changes properly changes todo completed attribute value' do
      expect { subject }.to change { todo.reload.completed }.from(false).to(true)
    end
  end

  context "when user doesn't exist" do
    let(:user_id) { user.id + 1 }

    it { is_expected.to be_failure }
  end

  context "when todo doesn't exist" do
    let(:todo) { instance_double('Todo', id: 1) }

    it { is_expected.to be_failure }
  end

  context "when todo doesn't belong to the user" do
    let(:user_id) { another_user.id }
    let(:another_user) { create(:user) }

    it { is_expected.to be_failure }
  end
end
