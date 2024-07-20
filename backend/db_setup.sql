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
    IF (SELECT COUNT(*) FROM shop) = 0 THEN
        INSERT INTO shop (name, image_url, price) VALUES
        ('Shop A', 'http://example.com/shopA.jpg', 19.99),
        ('Shop B', 'http://example.com/shopB.jpg', 29.99),
        ('Shop C', 'http://example.com/shopC.jpg', 39.99),
        ('Shop D', 'http://example.com/shopD.jpg', 49.99),
        ('Shop E', 'http://example.com/shopE.jpg', 59.99),
        ('Shop F', 'http://example.com/shopF.jpg', 69.99),
        ('Shop G', 'http://example.com/shopG.jpg', 79.99),
        ('Shop H', 'http://example.com/shopH.jpg', 89.99),
        ('Shop I', 'http://example.com/shopI.jpg', 99.99);
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