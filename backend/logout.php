<?php
// logout.php
session_start();
session_destroy();
echo json_encode(array("message" => "Logout successful."));
?>

