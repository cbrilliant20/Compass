# compass

# Overview

Compass is a travel planning app built with React, Ruby, Rails and PostgreSQL. Users can create, update and delete account specific trips and iteneraries.

# Features

1.  User authentication
2.  Full CRUD
3.  RESTful JSON API
4.  Media queries

# Goals

1.  Achieve all goals in MVP
2.  Create a clean, user friendly design
3.  Proper project workflow and git interaction
4.  Account for accessability and screen diversity

# Challenges

1.  Working backend database with appropriate associations
2.  Displaying data in an easy to understand and interact with way
3.  Inline forms

# Migrations

```
class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end

class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :location
      t.string :date
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class CreateDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :details do |t|
      t.string :name
      t.string :location
      t.string :date
      t.string :time
      t.references :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
```

# Wireframe

https://www.figma.com/file/EnfS1Msu0QuNLHuUW73Xq4/Untitled?node-id=0%3A1

# Component Hierarchy

https://whimsical.com/compass-BhJ6Eo5FX7HduXwbuMU3GV

# ERD

https://drive.google.com/file/d/1rTTJjTtk24KgHG_2kAMT81wvHILBkx9d/view?usp=sharing

# Libraies and Dependecies

|   Library    |
| :----------: |
|    React     |
| React Router |
|    Axios     |
|     Ruby     |
|    Rails     |

# MVP

1. Create a RESTful JSON API using Ruby on Rails server
2. Database with three tables and associations
3. Full CRUD capability on both front end and back end.
4. Working interactive front end with React (8 components minumum)
5. Consume Ruby on Rails API data and React Router
6. Styled using CSS with two media queries for responsive design
7. Proper linting and conventions
8. Deploy backend via Heroku and front end via Netlify

# Post-MVP

1. Google calander integration
2. Travel resources page
3. Integrate Open Weather API

# Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Controllerss        |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Migrations          |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Models              |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| BE Route            |    H     |     2 hrs      |     8 hrs     |    8 hrs    |
| Component Structure |    H     |     1 hrs      |     2 hrs     |    2 hrs    |
| Screens             |    H     |     8 hrs      |     8 hrs     |    8 hrs    |
| Forms               |    H     |     4 hrs      |     3 hrs     |    3 hrs    |
| API Calls           |    H     |     4 hrs      |     4 hrs     |    4 hrs    |
| FE Routes           |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Resources           |    H     |     3 hrs      |     4 hrs     |    4 hrs    |
| CSS                 |    H     |     8 hrs      |     8 hrs     |    8 hrs    |
| TOTAL               |          |     39 hrs     |    46 hrs     |   46 hrs    |
