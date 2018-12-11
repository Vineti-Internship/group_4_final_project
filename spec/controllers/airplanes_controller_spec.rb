require 'rails_helper'


RSpec.describe AirplanesController, type: :controller do

  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      Airplane.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      airplane = Airplane.create! valid_attributes
      get :show, params: {id: airplane.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #new" do
    it "returns a success response" do
      get :new, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #edit" do
    it "returns a success response" do
      airplane = Airplane.create! valid_attributes
      get :edit, params: {id: airplane.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Airplane" do
        expect {
          post :create, params: {airplane: valid_attributes}, session: valid_session
        }.to change(Airplane, :count).by(1)
      end

      it "redirects to the created airplane" do
        post :create, params: {airplane: valid_attributes}, session: valid_session
        expect(response).to redirect_to(Airplane.last)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'new' template)" do
        post :create, params: {airplane: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested airplane" do
        airplane = Airplane.create! valid_attributes
        put :update, params: {id: airplane.to_param, airplane: new_attributes}, session: valid_session
        airplane.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the airplane" do
        airplane = Airplane.create! valid_attributes
        put :update, params: {id: airplane.to_param, airplane: valid_attributes}, session: valid_session
        expect(response).to redirect_to(airplane)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'edit' template)" do
        airplane = Airplane.create! valid_attributes
        put :update, params: {id: airplane.to_param, airplane: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested airplane" do
      airplane = Airplane.create! valid_attributes
      expect {
        delete :destroy, params: {id: airplane.to_param}, session: valid_session
      }.to change(Airplane, :count).by(-1)
    end

    it "redirects to the airplanes list" do
      airplane = Airplane.create! valid_attributes
      delete :destroy, params: {id: airplane.to_param}, session: valid_session
      expect(response).to redirect_to(airplanes_url)
    end
  end

end
