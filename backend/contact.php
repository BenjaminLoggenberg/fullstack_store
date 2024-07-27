<?php
include_once 'cors.php';


// Include database connection
include_once 'db.php';

// Get the raw POST data
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->name) && 
    isset($data->email) && 
    isset($data->message)
) {
    // Sanitize input data
    $name = htmlspecialchars(strip_tags($data->name));
    $email = htmlspecialchars(strip_tags($data->email));
    $message = htmlspecialchars(strip_tags($data->message));

    // Initialize database connection
    $db = new Database();
    $conn = $db->getConnection();

    // Prepare SQL query to insert contact data
    $query = "INSERT INTO contact (name, email, message) VALUES (:name, :email, :message)";
    $stmt = $conn->prepare($query);

    // Bind parameters
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':message', $message);

    // Execute the query
    if ($stmt->execute()) {
        // Respond with a success message
        http_response_code(200);
        echo json_encode(array("message" => "Message sent successfully."));
    } else {
        // Respond with a failure message
        http_response_code(500);
        echo json_encode(array("message" => "Unable to send message."));
    }
} else {
    // Respond with a failure message for incomplete data
    http_response_code(400);
    echo json_encode(array("message" => "Incomplete data."));
}
?>