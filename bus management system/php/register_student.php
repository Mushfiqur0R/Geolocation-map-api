<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bus_management";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$student_id = $_GET['student_id'];

// Fetch student details based on the student ID
$stmt = $conn->prepare("SELECT * FROM registered_students WHERE student_id = ?");
$stmt->bind_param("s", $student_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $student = $result->fetch_assoc();
    echo "<h1>Welcome to your profile, Student ID: " . $student['student_id'] . "</h1>";
    echo "<p>Name: " . $student['student_name'] . "</p>";
    echo "<p>Email: " . $student['email'] . "</p>";
} else {
    echo "<h1 style='color: red;'>No student found with this ID.</h1>";
}

$conn->close();
?>
