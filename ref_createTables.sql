CREATE TABLE Client (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone BIGINT NOT NULL,
    address TEXT NOT NULL,
    password VARCHAR(255)
);

CREATE TABLE Store (
    nit VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    location VARCHAR(255) UNIQUE NOT NULL,
    image TEXT,
    phone BIGINT NOT NULL,
	email VARCHAR(255) NOT NULL
);

CREATE TABLE Category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price BIGINT NOT NULL,
    images TEXT[] NOT NULL,
    store_nit VARCHAR(255) NOT NULL,
    FOREIGN KEY (store_nit) REFERENCES Store(nit),
    UNIQUE (name, store_nit) // ---- Añadido para evitar repeticiones en los productos en la misma tienda, pero si puedo repetir el producto en otras tiendas
);

CREATE TABLE ProductCategory (
    id SERIAL PRIMARY KEY,
    product_id SERIAL,
    category_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (category_id) REFERENCES Category(id)
);

CREATE TABLE Purchase (
    id SERIAL PRIMARY KEY,
    client_id SERIAL,
    store_nit VARCHAR(255) NOT NULL,
    products VARCHAR(255)[] NOT NULL,
    state VARCHAR(255) NOT NULL,
    location TEXT NOT NULL,
    init_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    balance BIGINT NOT NULL,
    FOREIGN KEY (client_id) REFERENCES Client(id) ON DELETE SET NULL, // ---- Permite que un pedido no necesariamente tenga que tener un cliente
    FOREIGN KEY (store_nit) REFERENCES Store(nit)
);

CREATE TABLE PaymentMethod (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Pay (
    id SERIAL PRIMARY KEY,
    purchase_id SERIAL NOT NULL,
    payment_method_id SERIAL NOT NULL,
    reference VARCHAR(255),
    amount BIGINT NOT NULL,
    date TIMESTAMP NOT NULL,
    state VARCHAR(255) NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES Purchase(id),
    FOREIGN KEY (payment_method_id) REFERENCES PaymentMethod(id)
);
