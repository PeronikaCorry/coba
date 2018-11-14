class UsersController < ApplicationController
 def index
 	@nama = User.all
 end
end
