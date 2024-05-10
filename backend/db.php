<?php
// db.php
class Database {
    private $host = 'localhost'; // Database host
    private $db_name = 'shop_db'; // Database name
    private $username = 'root'; // Database username (change as needed)
    private $password = ''; // Database password (change as needed)
    public $conn; // Database connection

    // Method to get the database connection
    public function getConnection() {
        $this->conn = null;
        try {
            // Create a new PDO connection
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Set error mode to exception
        } catch(PDOException $exception) {
            // Output connection error message
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn; // Return the connection
    }
}
?>

