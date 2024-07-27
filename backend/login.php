<?php

include_once 'cors.php';

include_once 'db.php';

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = $data->password;

$db = new Database();
$conn = $db->getConnection();

$query = "SELECT * FROM user WHERE username = :username LIMIT 0,1";
$stmt = $conn->prepare($query);
$stmt->bindParam(":username", $username);
$stmt->execute();
$num = $stmt->rowCount();

if($num > 0) {
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $id = $row['id'];
    $username = $row['username'];
    $password2 = $row['password'];

    if(password_verify($password, $password2)) {
        session_start();
        $_SESSION['user_id'] = $id;
        echo json_encode(array("user_id" => $id));
        } else {
        echo json_encode(array("message" => "Login failed."));
    }
} else {
    echo json_encode(array("message" => "User not found."));
    http_response_code(401);
    exit;
}
?>

