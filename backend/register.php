<?php

include_once 'cors.php';

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include_once 'db.php';

    // Read JSON input
    $data = json_decode(file_get_contents("php://input"));

    // Check if JSON decoding was successful
    if ($data && isset($data->username) && isset($data->password)) {
        $username = $data->username;
        $password = password_hash($data->password, PASSWORD_BCRYPT);

        // Initialize database connection
        $db = new Database();
        $conn = $db->getConnection();

        // Prepare SQL query
        $query = "INSERT INTO user (username, password) VALUES (:username, :password)";
        $stmt = $conn->prepare($query);

        // Bind parameters
        $stmt->bindParam(":username", $username);
        $stmt->bindParam(":password", $password);

        // Execute query and return response
        if ($stmt->execute()) {
            echo json_encode(array("message" => "User was created."));
        } else {
            echo json_encode(array("message" => "Unable to create user."));
        }
    } else {
        echo json_encode(array("message" => "Invalid input."));
    }
} else {
    // Return 405 Method Not Allowed for unsupported request methods
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode(array("message" => "Method Not Allowed. Only POST requests are allowed."));
}
?>

