# frozen_string_literal: true

module Todos
  class Toggle
    include Dry::Monads[:result, :try, :do]
    include Dry.Types
    extend Dry::Initializer

    param :user_id, type: Strict::Integer, reader: :private
    param :todo_id, type: Strict::Integer, reader: :private

    def call
      user = yield find_user
      todo = yield find_todo

      yield verify_authorship!(todo, user)

      toggle_todo(todo)
    end

    private

    def find_user
      Try(ActiveRecord::RecordNotFound) { User.find(user_id) }
    end

    def find_todo
      Try(ActiveRecord::RecordNotFound) { Todo.find(todo_id) }
    end

    def verify_authorship!(todo, user)
      todo.user_id == user.id ? Success() : Failure(:todo_authorship_mismatch)
    end

    def toggle_todo(todo)
      todo.toggle! ? Success(todo) : Failure()
    end
  end
end
