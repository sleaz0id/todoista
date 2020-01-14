module API
  module V1
    module Todos
      class Toggle < Base
        desc "Toggle todo's 'completed' status"

        params { use :todo_id }

        patch do
          if ::Todos::Toggle.new(current_user.id, params[:id]).call
            status :ok
            @todo
          else
            status :bad_request
            'Todo toggle failed'
          end
        end
      end
    end
  end
end
