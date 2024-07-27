CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS shop (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(50) NOT NULL UNIQUE,
   image_url VARCHAR(50) NOT NULL,
   price DECIMAL(10,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_purchases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    shop_id INT NOT NULL,
    purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (shop_id) REFERENCES shop(id) ON DELETE CASCADE
);

-- A stored procedure to insert data if tables are empty

DELIMITER //

CREATE PROCEDURE insert_initial_data()
BEGIN
    -- Check if the `user` table is empty and insert data if it is
    IF (SELECT COUNT(*) FROM user) = 0 THEN
        INSERT INTO user (username, password) VALUES
        ('john_doe', 'password123'),
        ('jane_smith', 'securepass456');
    END IF;

    -- Check if the `shop` table is empty and insert data if it is
   
        INSERT INTO shop (name, image_url, price) VALUES
        ('Halo Ring', '/images/Halo_Rings.jpeg', 19.99),
        ('Sidestone Ring', '/images/Sidestone_Rings.jpeg', 29.99),
        ('Solitaire Ring', '/images/Soliraire_Rings.jpeg', 39.99),
        ('Three Stone Ring', '/images/Three_Stone_Rings.jpeg', 49.99),
        ('Vintage Ring', '/images/Vintage_Rings.jpeg', 59.99),
        ('Diamond Drop Earring', '/images/Diamond_Drop_Earrings.jpeg', 69.99),
        ('Diamond Fashion Earring', '/images/Diamond_Fashion_Earrings.jpeg', 79.99),
        ('Diamond Hoop Earring', '/images/Diamond_Hoop_Earrings.jpeg', 89.99),
        ('Diamond Stud Earring', '/images/Diamond_Stud_Earrings.jpeg', 99.99);
    END IF;

    -- Check if the `user_purchases` table is empty and insert data if it is
    IF (SELECT COUNT(*) FROM user_purchases) = 0 THEN
        INSERT INTO user_purchases (user_id, shop_id) VALUES
        (1, 1),  -- Assuming user_id 1 and shop_id 1 exist
        (2, 2);  -- Assuming user_id 2 and shop_id 2 exist
    END IF;
END //

DELIMITER ;

-- Call the stored procedure to insert data
CALL insert_initial_data();