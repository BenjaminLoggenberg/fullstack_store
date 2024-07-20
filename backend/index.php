<?php
// Handle OPTIONS requests 
include_once 'cors.php';
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { exit(0); }

include_once 'db.php';


$request_method = $_SERVER["REQUEST_METHOD"]; // Get the request method (GET, POST, etc.)
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH); // Get the request path

switch($request_method) {
    case 'POST':
        // Route POST requests
        if($path == '/register') {
            file_put_contents('debug.log', "Register endpoint hit at " . date('Y-m-d H:i:s') . "\n", FILE_APPEND); 
            include_once 'register.php';
        } elseif($path == '/login') {
            include_once 'login.php';
        } elseif($path == '/purchase') {
            include_once 'purchase.php';
        } elseif($path == '/reset_password') {
            include_once 'reset_password.php';
        } elseif($path == '/user_data') {
            include_once 'user_data.php';
        }
        break;
    case 'GET':
        // Route GET requests
        //  echo $path;
        if($path == '/logout') {
            include_once 'logout.php';
        } elseif($path == '/products') {
            // echo "tester1";
            include_once 'products.php';
            // echo "tester2";
        }
        break;
    default:
        // Return 405 Method Not Allowed for unsupported request methods
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}
?>
