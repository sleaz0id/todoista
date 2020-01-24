class Todo < ApplicationRecord
  validates :text, presence: true

  belongs_to :user

  def toggle!
    update!(completed: !completed)
  end
end
