module API
  module V1
    module Todos
      class Toggle < Base
        desc "Toggle todo's 'completed' status"

        params { use :todo_id }

        patch do
          todo = ::Todos::Toggle.new(current_user.id, params[:id]).call.value_or(nil)
          if todo
            status :ok
            todo
          else
            status :bad_request
            'Todo toggle failed'
          end
        end
      end
    end
  end
end
