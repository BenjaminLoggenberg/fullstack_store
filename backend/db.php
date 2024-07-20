<?php
$servername = "localhost";
$username = "root"; // Your MySQL root username
$password = "root"; // Your MySQL root password
$dbname = "shopdb"; // The database you want to create
$port = "8889";

// Create connection
$conn = new mysqli($servername, $username, $password, '', $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully\n";
} else {
    echo "Error creating database: " . $conn->error;
}

// Select the database
$conn->select_db($dbname);

// Read SQL file
$sql = file_get_contents('db_setup.sql');

// Execute SQL commands
if ($conn->multi_query($sql)) {
    do {
        if ($result = $conn->store_result()) {
            $result->free();
        }
    } while ($conn->more_results() && $conn->next_result());
    echo "Database setup completed successfully\n";
} else {
    echo "Error setting up database: " . $conn->error;
}

$conn->close();
?>