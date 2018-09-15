module API
  module V1
    module Todos
      class Show < Base
        desc 'Return a todo'

        params { use :todo_id }

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
