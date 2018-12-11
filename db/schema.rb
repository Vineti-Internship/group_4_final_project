# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_08_215713) do

  create_table "airlines", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "airplanes", force: :cascade do |t|
    t.string "name"
    t.string "model"
    t.string "status"
    t.string "country"
    t.time "time_on_lane"
    t.integer "airline_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "capacity"
    t.index ["airline_id"], name: "index_airplanes_on_airline_id"
  end

  create_table "flights", force: :cascade do |t|
    t.string "from"
    t.string "to"
    t.datetime "flight_start"
    t.time "flight_time"
    t.integer "lane_id"
    t.integer "airplane_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["airplane_id"], name: "index_flights_on_airplane_id"
    t.index ["lane_id"], name: "index_flights_on_lane_id"
  end

  create_table "lane_max_counts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "value"
  end

  create_table "lanes", force: :cascade do |t|
    t.integer "capacity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "lane_max_count_id"
    t.index ["lane_max_count_id"], name: "index_lanes_on_lane_max_count_id"
  end

  create_table "tickets", force: :cascade do |t|
    t.integer "user_id"
    t.integer "flight_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flight_id"], name: "index_tickets_on_flight_id"
    t.index ["user_id"], name: "index_tickets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "role", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
