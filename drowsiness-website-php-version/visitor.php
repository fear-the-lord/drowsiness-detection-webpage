<?php
    error_reporting(0);
    $db_host = "localhost";
    $db_username = "id14968066_admin"; 
    //$db_username = "root"; 
    $db_password = "MTN2zmW][b[8XoWj";
    //$db_password = "toor";
    $db_name = "id14968066_visitor";
    //$db_name = "visited";
    $db_table = "visited";

    $db = mysqli_connect($db_host, $db_username, $db_password, $db_name) or die("Host or database not accessible");

    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip_address = $_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else {
        $ip_address = $_SERVER['REMOTE_ADDR'];
    }
    $ip_address = explode(', ', trim($ip_address))[0];

    $sql_call = "SELECT id FROM ".$db_table." WHERE ip LIKE '".$ip_address."';";
    $sql_result = mysqli_query($db, $sql_call) or die("SQL request failed ");
    $row = mysqli_fetch_assoc($sql_result);

    if(sizeof($row) > 0) {
        $sql_call = "SELECT count(ip) AS c FROM ".$db_table;
        $sql_result = mysqli_query($db, $sql_call) or die("SQL request failed ");
        $row = mysqli_fetch_assoc($sql_result);

        $x = $row['c'];
        mysqli_close($db);
        echo $x;
    }
    else {
        $sql_call = "INSERT INTO ".$db_table." (ip) VALUES ('".$ip_address."');";
        mysqli_query($db, $sql_call) or die("Error while entering");
    
        $sql_call = "SELECT count(ip) AS c FROM ".$db_table;
        $sql_result = mysqli_query($db, $sql_call) or die("SQL request failed ");
        $row = mysqli_fetch_assoc($sql_result);
    
        $x = $row['c'];
        mysqli_close($db);
        echo $x;
    }
?>