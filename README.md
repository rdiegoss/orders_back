# Project Order - Back-End

**Install dependencies project**

1. back-end requires [Node.js](https://nodejs.org/en/) latest version to run.
2. Install the dependencies and devDependencies and start the server.

**BEFORE YOU RUN PROJECT, PLEASE, CONFIGURE YOU DATABASE CONFIGURATION BELOW**

```
$ cd order_back
$ npm install
$ sails lift
```

**Database configuration**

Running Mysql Version - 5.5.54

```
CREATE TABLE orders (
id int(11) unsigned NOT NULL AUTO_INCREMENT,
product_id int(11) NOT NULL,
user_id int(11) NOT NULL,
date date NOT NULL,
quantity int(11) NOT NULL DEFAULT "1",
PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE products (
id int(11) unsigned NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL DEFAULT "",
price decimal(10,2) NOT NULL DEFAULT "0.00",
PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE users (
id int(11) unsigned NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL DEFAULT "",
PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```

Configure yous host/port/database in:
![ScreenShot2017-03-16at15.15.03.png](http://ap.imagensbrasil.org/images/2017/03/16/ScreenShot2017-03-16at15.15.03.png)

**Routes**

 _**ORDER - CONTROLLER**_

`POST: http://localhost:1337/orders`


Parameters to send:
```
{
    "product_id": <id product>,
    "user_id": <id user>,
    "quantity": <quantity>
}

Example: 
{
    "product_id": 1,
    "user_id": 1,
    "quantity": 1
}
```

`PUT: http://localhost:1337/orders`

Parameters to send:
```
{
    "id": <id order>
    "product_id": <id product>,
    "user_id": <id user>,
    "quantity": <quantity>
}

Example: 
{
    "id": 1,
    "product_id": 2,
    "user_id": 4,
    "quantity": 3
}
```

`DELETE: http://localhost:1337/orders/<id Order>`

```
Example: http://localhost:1337/orders/1
```

 _**USER - CONTROLLER**_

`POST: http://localhost:1337/users`


Parameters to send:
```
{
    "name": <Name User>
}

Example: 
{
    "name": "João"
}
```

`GET: http://localhost:1337/users/all`

~~Parameters to send:~~

```
Example: http://localhost:1337/users/all
```
 _**PRODUCT - CONTROLLER**_

`POST: http://localhost:1337/products`


Parameters to send:
```
{
    "name": <Name product>,
    "price": <Price product>
}

Example: 
{
    "name": "games",
    "price": 199.99
}
```

`GET: http://localhost:1337/products/all`

~~Parameters to send:~~

```
Example: http://localhost:1337/products/all
```
