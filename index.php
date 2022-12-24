<?php


$password = $email = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $email = test_input($_POST["email"]);
  $password = test_input($_POST["pw"]);
  $pws = include("./data.php");
if(array_key_exists($email,$confidential)){
  if($confidential[$email]===$password){
    echo "Erfolg!";
  }

}

}


function test_input($data) {
    // Input filtern
  $data = trim($data); // Strip unnecessary characters (extra space, tab, newline)
  $data = stripslashes($data); // Remove backslashes (\)
  $data = htmlspecialchars($data); // The htmlspecialchars() function converts special characters to HTML entities
  return $data;
}
   
  
  
?>
