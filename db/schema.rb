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

ActiveRecord::Schema.define(version: 2018_12_07_074948) do

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
ActiveRecord::Schema.define(version: 2018_12_08_123204) do

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
    t.index ["airline_id"], name: "index_airplanes_on_airline_id"
  end

  create_table "lane_max_counts", force: :cascade do |t|
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lanes", force: :cascade do |t|
    t.integer "capacity", null: false
    t.integer "lane_max_count_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lane_max_count_id"], name: "index_lanes_on_lane_max_count_id"
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
