// script.js

// Get the dropdown and forms
const userRoleDropdown = document.getElementById('userRole');
const studentForm = document.getElementById('studentForm');
const adminForm = document.getElementById('adminForm');
const busDriverForm = document.getElementById('busDriverForm');

// Event listener to show the correct form based on the user role selection
userRoleDropdown.addEventListener('change', function() {
    const selectedRole = this.value;

    // Hide all forms initially
    studentForm.classList.add('hidden');
    adminForm.classList.add('hidden');
    busDriverForm.classList.add('hidden');

    // Show the relevant form
    if (selectedRole === 'student') {
        studentForm.classList.remove('hidden');
    } else if (selectedRole === 'admin') {
        adminForm.classList.remove('hidden');
    } else if (selectedRole === 'busDriver') {
        busDriverForm.classList.remove('hidden');
    }
});

// Student Registration
document.getElementById('studentRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const studentPassword = document.getElementById('studentPassword').value;
    const studentIdCard = document.getElementById('studentIdCard').files[0];

    if (!studentId || !studentName || !studentEmail || !studentPassword || !studentIdCard) {
        alert('Please complete all fields for student registration');
    } else {
        alert('Student registered successfully!');
    }
});

// Admin Login
document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const adminUsername = document.getElementById('adminUsername').value;
    const adminPassword = document.getElementById('adminPassword').value;

    if (adminUsername === 'Admin' && adminPassword === '1234') {
        alert('Admin logged in successfully');
    } else {
        alert('Invalid Admin credentials');
    }
});

// Bus Driver Login
document.getElementById('busDriverLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const busName = document.getElementById('busName').value;
    const busDriverPassword = document.getElementById('busDriverPassword').value;

    // Example preset credentials (can be changed dynamically)
    if (busName === 'Bus 1' && busDriverPassword === 'buspassword1') {
        alert('Bus Driver logged in successfully');
    } else {
        alert('Invalid Bus Driver credentials');
    }
});
