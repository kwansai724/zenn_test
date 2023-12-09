FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    sequence(:email) {|n| "#{n}_test@example.com" }
    password { Faker::Internet.password(min_length: 10) }
    confirmed_at { Time.current }
  end
end
