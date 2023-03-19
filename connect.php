<?php
$servername = "localhost";
$username = "your_username";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$pass = $_POST['pass'];

// Insert data into database table
$sql = "INSERT INTO users (fullname, email, phone, password) VALUES ('$fullname', '$email', '$phone', '$pass')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
