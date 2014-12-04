class PagesController < ApplicationController
	def home
		render 'pages/home/home'
	end

  def page
    render ['pages', params[:page_name], params[:page_name]].join('/')
  end
end