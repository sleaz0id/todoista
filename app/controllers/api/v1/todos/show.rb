module API
  module V1
    module Todos
      class Show < Base
        desc 'Return a todo'

        params do
          requires :id, type: String, desc: 'ID of the todo'
        end

        get do
          if @todo
            status :ok
            @todo
          else
            status :not_found
            'Record not found'
          end
        end
      end
    end
  end
end
