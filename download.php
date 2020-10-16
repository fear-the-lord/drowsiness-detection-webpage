<?php
    $to = 'rajarsi3997@gmail.com';
    $id = $_POST["id"];
    $name = $_POST["name"];
    $image = $_POST["image"];
    $email= $_POST["email"];

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr><td>Google ID: '.$id.'</td></tr>
        <tr><td>Name: '.$name.'</td></tr>
        <tr><td>Image URL: '.$image.'</td></tr>
        <tr><td>Email: '.$email.'</td></tr>
    </table>';

    $file = ("storage/sample_file.apk");
    $filetype = filetype($file);
    $filename = basename($file);

    header("Content-Type: " . $filetype);
    header("Content-Length: " . filesize($file));
    header("Content-Disposition: attachment; filename=" . $filename);

    if (@mail($to, 'Message from contact page', $message, $headers))
    {
        readfile($file);
    }
?>