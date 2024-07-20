<?php
class Database {
    private $host = "localhost";
    private $username = "root"; // Your MySQL root username
    private $password = "root"; // Your MySQL root password
    private $dbname = "shopdb"; // The database you want to create
    public $conn;

    public function __construct() {
        $this->conn = $this->connect();
    }

    private function connect() {
        try {
            // Create a new PDO instance
            $pdo = new PDO("mysql:host=$this->host", $this->username, $this->password);
            // Set PDO attributes
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Create the database if it does not exist
            $pdo->exec("CREATE DATABASE IF NOT EXISTS $this->dbname");
            echo "Database created successfully\n";

            // Select the database
            $pdo->exec("USE $this->dbname");

            return $pdo;
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    }

    public function executeSqlFile($filename) {
        try {
            // Read SQL file
            $sql = file_get_contents($filename);

            // Execute SQL commands
            $this->conn->exec($sql);
            echo "Database setup completed successfully\n";
        } catch (PDOException $e) {
            echo "Error setting up database: " . $e->getMessage();
        }
    }

    public function getConnection() {
        return $this->conn;
    }
}
?>