module API
  module V1
    module Todos
      class Index < Base
        desc 'Return all todos'

        get do
          Todo.all
        end
      end
    end
  end
end
