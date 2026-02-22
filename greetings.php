<?php
// 1. Get user input
// Note: 'readline' works in the command line. 
// If using a web browser, change this to specific value or $_GET['size']
$n = (int)readline("Enter the number of rows (half-height): ");

// 2. Print the Upper Half (including the middle row)
for ($i = 1; $i <= $n; $i++) {
    // Print leading spaces
    // Formula: (Total Size - Current Row)
    for ($j = 1; $j <= $n - $i; $j++) {
        echo " ";
    }
    
    // Print stars
    // Formula: (2 * Current Row - 1)
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    
    // Move to next line
    echo "\n";
}

// 3. Print the Lower Half
// We start from $n - 1 because the middle row is already printed
for ($i = $n - 1; $i >= 1; $i--) {
    // Print leading spaces
    for ($j = 1; $j <= $n - $i; $j++) {
        echo " ";
    }
    
    // Print stars
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    
    // Move to next line
    echo "\n";
}
?>