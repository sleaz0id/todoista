module API
  module V1
    module Todos
      class Toggle < Base
        desc "Toggle todo's 'completed' status"

        params { use :todo_id }

        patch do
          if @todo
            if @todo.toggle!(:completed)
              status :ok
              @todo
            else
              status :bad_request
              'Todo toggle failed'
            end
          else
            status :not_found
            'Record not found'
          end
        end
      end
    end
  end
end
