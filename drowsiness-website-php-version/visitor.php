<?php
    $db_host = "localhost";
    $db_username = "id14895920_admin"; 
    $db_password = "?(L6l{H~vC39t?C3";
    $db_name = "id14895920_visitor";
    $db_table = "visited";

    $db = mysqli_connect($db_host, $db_username, $db_password, $db_name) or die("Host or database not accessible");

    $sql_call = "UPDATE ".$db_table." SET count = count + 1 WHERE id = 1"; 
    mysqli_query($db, $sql_call) or die("Error while entering");

    $sql_call = "SELECT * FROM ".$db_table." WHERE id = 1";
    $sql_result = mysqli_query($db, $sql_call) or die("SQL request failed ");
    $row = mysqli_fetch_assoc($sql_result);
    $x = $row['count'];

    mysqli_close($db);
    echo $x;
?>