module API
  module V1
    module Todos
      class Base < API::Base
        include API::V1::Defaults

        namespace :todos do
          mount Index
          mount Create

          route_param :id, type: Integer do
            before do
              @todo = Todo.find(params[:id])
            end

            mount Show

            namespace :toggle do
              mount Toggle
            end
          end
        end
      end
    end
  end
end
