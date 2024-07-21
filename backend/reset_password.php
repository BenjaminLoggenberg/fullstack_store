<?php
include_once 'cors.php';
include_once 'db.php';

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$current_password = $data->current_password;
$new_password = password_hash($data->new_password, PASSWORD_BCRYPT);

$db = new Database();
$conn = $db->getConnection();

$query = "SELECT * FROM user WHERE username = :username LIMIT 0,1";
$stmt = $conn->prepare($query);
$stmt->bindParam(":username", $username);
$stmt->execute();
$num = $stmt->rowCount();

if($num > 0) {
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $password2 = $row['password'];

    if(password_verify($current_password, $password2)) {
        $query = "UPDATE user SET password = :password WHERE username = :username";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":password", $new_password);
        $stmt->bindParam(":username", $username);

        if($stmt->execute()) {
            echo json_encode(array("message" => "Password reset successful."));
        } else {
            echo json_encode(array("message" => "Failed to reset password."));
        }
    } else {
        echo json_encode(array("message" => "Current password is incorrect."));
    }
} else {
    echo json_encode(array("message" => "User not found."));
}
?>

