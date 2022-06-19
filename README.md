## Product App

## Introduction

Building a Product page for an Inventory System.
The Page lists all products available and allows users to view each product items summary in detail before adding / removing from cart.

## Overview

Using Python, Graphene, Docker, etc.

-   a) Create a Product model.
-   b) Create a command to migrate the products data above into the database.
-   c) Create a GraphQL endpoint to return all the products to the FE.
-   d) Encapsulate your back-end services in docker containers.

Using React, Context API, and GraphQL

-   a) Create a products page to show the GraphQL fetched products in cards with appropriate product data (name, price, pictures, etc.).
-   b) Each product should have an "Add to cart" button.
-   c) On click add to cart, show cart summary component as an overlay and add the product to the cart.
-   d) Allow increment (+), decrement (-) and delete functionality on each cart item in the cart.

We want Fyyur to be the next new platform that artists and musical venues can use to find each other, and discover new music shows. Let's make that happen!

## Tech Stack (Dependencies)

### 1. Backend Dependencies

The Backend of the application is built on django with graphQL powering it's APIs using the graphene, graphene-django package.

Language: Python3
Framework: Django

Our tech stack includes the following:

-   **virtualenv** as a tool to create isolated Python environments
-   **graphene** to be our ORM library of choice via the **graphene-django** package
-   **SQLite** as the default database of choice
-   **Python3** and **DJANGO** as our server language and server framework
    You can download and install the dependencies mentioned above using `pip` as:

```
pip install virtualenv
pip install -r requirements.txt, check the development setup to find out how to run the application.
```

### 2. Frontend Dependencies

<!-- You must have the **HTML**, **CSS**, and **Javascript** with [Bootstrap 3](https://getbootstrap.com/docs/3.4/customize/) for our website's frontend. Bootstrap can only be installed by Node Package Manager (NPM). Therefore, if not already, download and install the [Node.js](https://nodejs.org/en/download/). Windows users must run the executable as an Administrator, and restart the computer after installation. After successfully installing the Node, verify the installation as shown below.

```
node -v
npm -v
```

Install [Bootstrap 3](https://getbootstrap.com/docs/3.3/getting-started/) for the website's frontend:

```
npm init -y
npm install bootstrap@3
``` -->

## Main Files: Project Structure

```sh
├── README.md
├── .gitignore
├── Client *** FrontEnd Server - React
    └──core
        |── public
        |── src
            |── Assets
            |── Components
            |── queryServices
        |── constants.js
        |── .gitignore
        └── README.md
└── Server *** Backend Server - Django
    └──core
        |── core
            |── settings.py
            |── schema.py
            |── urls.py
            |── asgi.py
            └── wsgi.py
        |── product
            |── migrations
            |── requirements.txt
            └── db.json
        |── manange.py
        |── README.md
        |── requirements.txt
        └── db.json
```

## Development Setup

To run the application locally,

first: [run the backend server](</Server%20(django-graphQL)>).<br>
& then [run the frontend server](</Client%20(React)/README.md>).<br><br>

### Verify on the Browser

**Backend App GUI: qraphiQL**<br>
[http://127.0.0.1:8000/graphql](http://127.0.0.1:8000/graphql) or [http://localhost:8000/graphql](http://localhost:8000/graphql)

**Frontend App: React**<br>
[http://127.0.0.1:3000](http://127.0.0.1:8000/) or [http://localhost:8000](http://localhost:8000)
