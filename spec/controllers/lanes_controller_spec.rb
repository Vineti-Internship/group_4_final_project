require 'rails_helper'

RSpec.describe LanesController, type: :controller do

  # # This should return the minimal set of attributes required to create a valid
  # # Lane. As you add validations to Lane, be sure to
  # # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  # # This should return the minimal set of values that should be in the session
  # # in order to pass any filters (e.g. authentication) defined in
  # # LanesController. Be sure to keep this updated too.
  # let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      Lane.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      lane = Lane.create! valid_attributes
      get :show, params: {id: lane.to_param}, session: valid_session
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
      lane = Lane.create! valid_attributes
      get :edit, params: {id: lane.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Lane" do
        expect {
          post :create, params: {lane: valid_attributes}, session: valid_session
        }.to change(Lane, :count).by(1)
      end

      it "redirects to the created lane" do
        post :create, params: {lane: valid_attributes}, session: valid_session
        expect(response).to redirect_to(Lane.last)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'new' template)" do
        post :create, params: {lane: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested lane" do
        lane = Lane.create! valid_attributes
        put :update, params: {id: lane.to_param, lane: new_attributes}, session: valid_session
        lane.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the lane" do
        lane = Lane.create! valid_attributes
        put :update, params: {id: lane.to_param, lane: valid_attributes}, session: valid_session
        expect(response).to redirect_to(lane)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'edit' template)" do
        lane = Lane.create! valid_attributes
        put :update, params: {id: lane.to_param, lane: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested lane" do
      lane = Lane.create! valid_attributes
      expect {
        delete :destroy, params: {id: lane.to_param}, session: valid_session
      }.to change(Lane, :count).by(-1)
    end

    it "redirects to the lanes list" do
      lane = Lane.create! valid_attributes
      delete :destroy, params: {id: lane.to_param}, session: valid_session
      expect(response).to redirect_to(lanes_url)
    end
  end

end
