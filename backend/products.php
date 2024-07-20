<?php

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allowed headers
// all_products.php
include_once 'db.php'; // Include database connection file
// Initialize database connection
$db = new Database();
$conn = $db->getConnection();
// Prepare SQL query to fetch all products
$query = "SELECT id, name, image_url, price FROM shop";
$stmt = $conn->prepare($query);
$stmt->execute(); // Execute query
$products = array(); // Initialize array to store products
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    // Fetch each product and add to products array
    $product = array(
        "id" => $row['id'],
        "name" => $row['name'],
        "image_url" => $row['image_url'],
        "price" => (float) $row['price'],
    );
    array_push($products, $product); // Add product to products array
}
// Return products array as JSON
echo json_encode($products);
?>
