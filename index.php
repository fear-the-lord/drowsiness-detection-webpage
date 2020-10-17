<?php
    $request = $_SERVER['REQUEST_URI'];

    switch ($request) {
        case '/' :
            require __DIR__ . '/index.html';
            break;
        case '' :
            require __DIR__ . '/index.html';
            break;
        case '/home' :
            require __DIR__ . '/index.html';
            break;
        case '/about' :
            require __DIR__ . '/about.html';
            break;
        case '/pricing' :
            require __DIR__ . '/pricing.html';
            break;
        case '/developers' :
            require __DIR__ . '/developers.html';
            break;
        case '/faq' :
            require __DIR__ . '/faq.html';
            break;
        case '/contact' :
            require __DIR__ . '/contact.html';
            break;
        case '/download' :
            require __DIR__ . '/download.html';
            break;
        case '/coming' :
            require __DIR__ . '/coming.html';
            break;
        case '/elements' :
            require __DIR__ . '/elements.html';
            break;
        default:
            http_response_code(404);
            //require __DIR__ . '/views/404.php';
            break;
    }
?>