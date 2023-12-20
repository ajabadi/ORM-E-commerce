# Object-Relational Mapping (ORM): E-commerce Back End

This challenge involves building the back end for an e-commerce website, a crucial component in the electronics industry's internet retail sector. With e-commerce being a significant market, understanding the architecture of such platforms is essential for developers. You will configure an Express.js API to use Sequelize for interacting with a MySQL database. This project focuses on back-end functionalities and will not involve deployment.

## User Story 

As a manager at an internet retail company,I want a back end for my e-commerce website that uses the latest technologies,So that my company can compete with other e-commerce companies.

The application's API routes can be tested in Insomnia Core:

GET routes for all categories, products, and tags.
GET routes for a single category, product, and tag.
POST, PUT, and DELETE routes for categories, products, and tags.

## Database

### Category
- id: Integer, primary key, auto-increment, not null.
- category_name: String, not null.
  
### Product
- id: Integer, primary key, auto-increment, not null.
- product_name: String, not null.
- price: Decimal, not null, validates as decimal.
- stock: Integer, not null, default 10, validates as numeric.
- category_id: Integer, references the category model's id.

### Tag
- id: Integer, primary key, auto-increment, not null.
- tag_name: String.

### ProductTag
- id: Integer, primary key, auto-increment, not null.
- product_id: Integer, references the product model's id.
- tag_id: Integer, references the tag model's id.

### Associations

1. Product belongs to Category.
2. Category has many Product models.
3. Product belongs to many Tag models through ProductTag.
4. Tag belongs to many Product models.

## Additional Information 

A [walkthrough video](https://watch.screencastify.com/v/GFVvhpWfJvTDraNsyMA7) to demostrate the functionality of the application will be provided, showcasing the user flow and response handling.

## Sample at Insomnia
<img width="1278" alt="Screen Shot 2023-12-19 at 21 00 34" src="https://github.com/ajabadi/ORM-E-commerce/assets/145517793/610fde1a-ef19-425e-93ea-f5e12bfd683e">
