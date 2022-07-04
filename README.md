While browsing the Rails docs, I ran into the snippet `--new` that you can add when generating a new Rails project.
This project is simply to test what this snippet gets you and how Rails builds the project.
This was about a 120 second api spinup.. pretty cool

`
rails new bookstore --api
`

`
rails g scaffold book title:string body:text
`

`
rails db:seed
`

`
rails db:migrate
`

`
gem "rack-cors"
`

The generic controller it builds:

```ruby
class BooksController < ApplicationController
  before_action :set_book, only: %i[ show update destroy ]

  # GET /books
  def index
    @books = Book.all

    render json: @books
  end

  # GET /books/1
  def show
    render json: @book
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:title, :body)
    end
end

```
