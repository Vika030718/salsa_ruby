class PagesController < ApplicationController
	def home
		render 'pages/home/home'
	end

  def page
    render template_path
  end

  def search_page
    render template_path, layout: 'search'
  end

  private

  def template_path
    ['pages', params[:page_name], params[:page_name]].join('/')
  end
end