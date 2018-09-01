module API
  module V1
    class Todos < Grape::API
      include API::V1::Defaults

      resource :todos do
        desc 'Return all todos'
        get '', root: :graduates do
          Todo.all
        end

        desc 'Return a todo'
        params do
          requires :id, type: String, desc: 'ID of the todo'
        end
        get ':id', root: 'todo' do
          Todo.find(permitted_params[:id])
        end
      end
    end
  end
end
