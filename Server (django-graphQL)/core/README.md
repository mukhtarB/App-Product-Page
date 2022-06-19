## Backend Directory

---

## Overview

Backend API: using Python, Graphene, Docker.

## Development Setup

To run the application locally,

first: [run the backend server](</Server%20(django-graphQL)/core>).<br>
& then [run the frontend server](</Client%20(React)/core>).<br><br>

1. **Download the project starter code locally**

```
git clone https://github.com/mukhtarB/App-Product-Page.git
```

2. **Initialize and activate a virtualenv using:**

```
cd Server (django-graphQL)/
python -m virtualenv env
source env/bin/activate
```

> **Note** - In Windows, the `env` does not have a `bin` directory. Therefore, you'd use the analogous command shown below:

```
source env/Scripts/activate
```

3. **Install the dependencies:**

```
pip install -r requirements.txt
```

4. **Seed / Migrate data into db**

```
cd core
python manage.py migrate
python manage.py loaddata db.json
```

5. **Run the development server:**

```
python manage.py runserver
```

6. **Verify on the Browser**<br>
   Navigate to project homepage [http://127.0.0.1:8000/graphql](http://127.0.0.1:8000//graphql) or [http://localhost:8000/graphql](http://localhost:8000/graphql)
