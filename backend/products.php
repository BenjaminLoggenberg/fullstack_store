<?php
// all_products.php
include_once 'db.php'; // Include database connection file
echo "helpme";
// Initialize database connection
$db = new Database();
$conn = $db->getConnection();
echo "connection 1";
// Prepare SQL query to fetch all products
$query = "SELECT name, image_url, price FROM shop";
$stmt = $conn->prepare($query);
$stmt->execute(); // Execute query
echo "executed query";
$products = array(); // Initialize array to store products
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    // Fetch each product and add to products array
    $product = array(
        "name" => $row['name'],
        "image_url" => $row['image_url'],
        "price" => $row['price'],
    );
    array_push($products, $product); // Add product to products array
}
echo "created products array";
// Return products array as JSON
echo json_encode($products);
?>
