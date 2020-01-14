module Todos
  class Toggle
    include Dry.Types
    extend Dry::Initializer

    class TodoAuthorshipMismatch < StandardError; end

    param :user_id, type: Strict::Integer, reader: :private
    param :todo_id, type: Strict::Integer, reader: :private

    def call
      user = find_user
      todo = find_todo
      
      verify_authorship!(todo, user)

      toggle_todo(todo)
    end

    private

    def find_user
      User.find(user_id)
    end

    def find_todo
      Todo.find(todo_id)
    end

    def verify_authorship!(todo, user)
      raise TodoAuthorshipMismatch if todo.user_id != user.id
    end

    def toggle_todo(todo)
      todo.toggle!
    end
  end
end
