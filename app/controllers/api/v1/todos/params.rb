module API
  module V1
    module Todos
      module Params
        extend Grape::API::Helpers

        params :todo_id do
          requires :id, type: String, desc: 'ID of the todo'
        end
      end
    end
  end
end
