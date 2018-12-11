require 'rails_helper'


RSpec.describe LaneMaxCountsController, type: :controller do

  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }
  
  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      LaneMaxCount.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      lane_max_count = LaneMaxCount.create! valid_attributes
      get :show, params: {id: lane_max_count.to_param}, session: valid_session
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
      lane_max_count = LaneMaxCount.create! valid_attributes
      get :edit, params: {id: lane_max_count.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new LaneMaxCount" do
        expect {
          post :create, params: {lane_max_count: valid_attributes}, session: valid_session
        }.to change(LaneMaxCount, :count).by(1)
      end

      it "redirects to the created lane_max_count" do
        post :create, params: {lane_max_count: valid_attributes}, session: valid_session
        expect(response).to redirect_to(LaneMaxCount.last)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'new' template)" do
        post :create, params: {lane_max_count: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested lane_max_count" do
        lane_max_count = LaneMaxCount.create! valid_attributes
        put :update, params: {id: lane_max_count.to_param, lane_max_count: new_attributes}, session: valid_session
        lane_max_count.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the lane_max_count" do
        lane_max_count = LaneMaxCount.create! valid_attributes
        put :update, params: {id: lane_max_count.to_param, lane_max_count: valid_attributes}, session: valid_session
        expect(response).to redirect_to(lane_max_count)
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'edit' template)" do
        lane_max_count = LaneMaxCount.create! valid_attributes
        put :update, params: {id: lane_max_count.to_param, lane_max_count: invalid_attributes}, session: valid_session
        expect(response).to be_successful
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested lane_max_count" do
      lane_max_count = LaneMaxCount.create! valid_attributes
      expect {
        delete :destroy, params: {id: lane_max_count.to_param}, session: valid_session
      }.to change(LaneMaxCount, :count).by(-1)
    end

    it "redirects to the lane_max_counts list" do
      lane_max_count = LaneMaxCount.create! valid_attributes
      delete :destroy, params: {id: lane_max_count.to_param}, session: valid_session
      expect(response).to redirect_to(lane_max_counts_url)
    end
  end

end
