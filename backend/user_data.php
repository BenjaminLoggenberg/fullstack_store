<?php
// user_data.php
include_once 'db.php'; // Include database connection file

// Get JSON input data
$data = json_decode(file_get_contents("php://input"));
$user_id = $data->user_id; // Extract user_id from input data

// Initialize database connection
$db = new Database();
$conn = $db->getConnection();

// Prepare SQL query to fetch user data
$query = "SELECT id, username, created_at FROM users WHERE id = :user_id LIMIT 0,1";
$stmt = $conn->prepare($query);
$stmt->bindParam(":user_id", $user_id); // Bind user_id parameter
$stmt->execute(); // Execute query
$num = $stmt->rowCount(); // Get the number of rows

if($num > 0) {
    // If user is found, fetch and return user data
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode(array(
        "id" => $row['id'],
        "username" => $row['username'],
        "created_at" => $row['created_at']
    ));
} else {
    // If user is not found, return error message
    echo json_encode(array("message" => "User not found."));
}
?>
