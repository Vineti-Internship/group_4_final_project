require 'rails_helper'

RSpec.describe AirlanesController, type: :controller do

  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      Airlane.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      airlane = Airlane.create! valid_attributes
      get :show, params: {id: airlane.to_param}, session: valid_session
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
      airlane = Airlane.create! valid_attributes
      get :edit, params: {id: airlane.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Airlane" do
        expect {
          post :create, params: {airlane: valid_attributes}, session: valid_session
        }.to change(Airlane, :count).by(1)
      end

      it "redirects to the created airlane" do
        post :create, params: {airlane: valid_attributes}, session: valid_session
        expect(response).to redirect_to(Airlane.last)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'new' template)" do
        post :create, params: {airlane: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested airlane" do
        airlane = Airlane.create! valid_attributes
        put :update, params: {id: airlane.to_param, airlane: new_attributes}, session: valid_session
        airlane.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the airlane" do
        airlane = Airlane.create! valid_attributes
        put :update, params: {id: airlane.to_param, airlane: valid_attributes}, session: valid_session
        expect(response).to redirect_to(airlane)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'edit' template)" do
        airlane = Airlane.create! valid_attributes
        put :update, params: {id: airlane.to_param, airlane: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested airlane" do
      airlane = Airlane.create! valid_attributes
      expect {
        delete :destroy, params: {id: airlane.to_param}, session: valid_session
      }.to change(Airlane, :count).by(-1)
    end

    it "redirects to the airlanes list" do
      airlane = Airlane.create! valid_attributes
      delete :destroy, params: {id: airlane.to_param}, session: valid_session
      expect(response).to redirect_to(airlanes_url)
    end
  end

end
