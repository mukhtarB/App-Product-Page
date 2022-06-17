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

Our tech stack will include the following:

-   **virtualenv** as a tool to create isolated Python environments
-   **graphene** to be our ORM library of choice via graphene-django package
-   **SQLITE** as the default database of choice
-   **Python3** and **DJANGO** as our server language and server framework
    You can download and install the dependencies mentioned above using `pip` as:

```
pip install virtualenv
pip install -r requirements.txt
```

### 2. Frontend Dependencies

You must have the **HTML**, **CSS**, and **Javascript** with [Bootstrap 3](https://getbootstrap.com/docs/3.4/customize/) for our website's frontend. Bootstrap can only be installed by Node Package Manager (NPM). Therefore, if not already, download and install the [Node.js](https://nodejs.org/en/download/). Windows users must run the executable as an Administrator, and restart the computer after installation. After successfully installing the Node, verify the installation as shown below.

```
node -v
npm -v
```

Install [Bootstrap 3](https://getbootstrap.com/docs/3.3/getting-started/) for the website's frontend:

```
npm init -y
npm install bootstrap@3
```

## Main Files: Project Structure

```sh
├── README.md
├── .gitignore
├── Client *** FrontEnd Server - React
    └──core
        |──
        └──
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

1. **Download the project starter code locally**

```
git clone https://github.com/udacity/FSND.git
cd FSND/projects/01_fyyur/starter_code
```

2. **Create an empty repository in your Github account online. To change the remote repository path in your local repository, use the commands below:**

```
git remote -v
git remote remove origin
git remote add origin <https://github.com/<USERNAME>/<REPO_NAME>.git>
git branch -M master
```

Once you have finished editing your code, you can push the local repository to your Github account using the following commands.

```
git add . --all
git commit -m "your comment"
git push -u origin master
```

3. **Initialize and activate a virtualenv using:**

```
python -m virtualenv env
source env/bin/activate
```

> **Note** - In Windows, the `env` does not have a `bin` directory. Therefore, you'd use the analogous command shown below:

```
source env/Scripts/activate
```

4. **Install the dependencies:**

```
pip install -r requirements.txt
```

5. **Run the development server:**

```
export FLASK_APP=myapp
export FLASK_ENV=development # enables debug mode
python3 app.py
```

6. **Verify on the Browser**<br>
   Navigate to project homepage [http://127.0.0.1:5000/](http://127.0.0.1:5000/) or [http://localhost:5000](http://localhost:5000)
