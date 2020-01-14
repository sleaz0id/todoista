module API
  module V1
    module Todos
      class Create < Base
        desc 'Create new todo'

        params do
          requires :text, type: String, desc: 'Text content of the todo'
        end

        post do
          todo = Todo.create(
            user: current_user,
            text: params[:text],
            completed: false
          )

          if todo.valid?
            status :created
            todo
          else
            status :bad_request
            todo.errors
          end
        end
      end
    end
  end
end
