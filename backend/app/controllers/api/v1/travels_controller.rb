class Api::V1::TravelsController < ApplicationController
  def index
    @travels = Travel.all 
    render json: @travels
  end

  def show
  end

  def create
    @travel = Travel.new(travel_params)
    if @travel.save
      render json: @travel
    else
      render json: {errors: @travel.errors,message: "deu ruim pra cadastrar"},status: :unprocessable_entity
    end
  end

  def update
    @travel = Travel.find(params[:id])
    if @travel.update(travel_params)
      render json: @travel
    else
      render json: {errors: @travel.errors,message: "deu ruim pra editar"},status: :unprocessable_entity
    end
  end

  def destroy
    @travel = Travel.find(params[:id])
    @travel.destroy
    render json: {message: "Sua viagem foi deletada com sucesso!"}
  end
  
  private
    def travel_params
      params.require(:travel).permit(:nome,:data,:price,:desc)
    end
end
