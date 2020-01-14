module Todos
  class Toggle
    class TodoAuthorshipMismatch < StandardError; end

    def initialize(user_id, todo_id)
      @user_id = user_id
      @todo_id = todo_id
    end

    def call
      user = find_user
      todo = find_todo
      
      verify_authorship!(todo, user)

      toggle_todo(todo)
    end

    private

    attr_reader :user_id, :todo_id

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
