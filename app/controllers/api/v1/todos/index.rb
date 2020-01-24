module API
  module V1
    module Todos
      class Index < Base
        desc 'Return all todos'

        get do
          current_user.todos
        end
      end
    end
  end
end
