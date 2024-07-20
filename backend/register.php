<?php
include_once 'cors.php';
include_once 'db.php';

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = password_hash($data->password, PASSWORD_BCRYPT);

$db = new Database();
$conn = $db->getConnection();

$query = "INSERT INTO users SET username = :username, password = :password";

$stmt = $conn->prepare($query);

$stmt->bindParam(":username", $username);
$stmt->bindParam(":password", $password);

if($stmt->execute()) {
    echo json_encode(array("message" => "User was created."));
} else {
    echo json_encode(array("message" => "Unable to create user."));
}
?>

