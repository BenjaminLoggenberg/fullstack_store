<?php
// user_data.php
include_once 'cors.php';
include_once 'db.php'; // Include database connection file

if (isset($_GET['user_id'])) { $user_id = (int)$_GET['user_id']; 
} else { 
    echo json_encode(array("message" => "User ID not provided")); 
    exit; 
}
// Initialize database connection
$db = new Database();
$conn = $db->getConnection();

// Prepare SQL query to fetch user data
$query = "SELECT id, username, created_at FROM user WHERE id = :user_id LIMIT 0,1";
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
