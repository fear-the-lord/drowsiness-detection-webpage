function download(googleUser) {
    var profile = googleUser.getBasicProfile();
    sendEmail(profile.getId(), profile.getName(), profile.getImageUrl(), profile.getEmail());
}
function sendEmail(id, name, image, email) { 
    Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "ultradevsofficial2020@gmail.com", 
        Password: "qwysuahlmbfeczta", 
        To: 'ultradevsofficial2020@gmail.com', 
        From: email, 
        Subject: "Downloaded by " + name, 
        Body: "<table style=\"width:100%\"><tr><td>Google ID: " + id + "</td></tr><tr><td>Name: " + name + "</td></tr><tr><td>Image URL: " + image + "</td></tr><tr><td>Email: " + email + "</td></tr></table>",
    }).then(function (message) { 
        var d = document.createElement("a");
        d.setAttribute('href', 'https://uca38c0ac8402e06183db7502a10.dl.dropboxusercontent.com/cd/0/get/BBYpn6jkYd0Tnixx_kDJRcamPqXH8eWlJrpVKgY0YfZs6j5fY6PeBezR3dt-AOna_GS3o9tAvcZjqGbM6mq--DgEdF0J6L3bhMknUxOjpUkIHNNCT7zuQ8JEXGJfXkcKtP4/file#');
        d.setAttribute('hidden', 'hidden');
        d.setAttribute('download', 'https://uca38c0ac8402e06183db7502a10.dl.dropboxusercontent.com/cd/0/get/BBYpn6jkYd0Tnixx_kDJRcamPqXH8eWlJrpVKgY0YfZs6j5fY6PeBezR3dt-AOna_GS3o9tAvcZjqGbM6mq--DgEdF0J6L3bhMknUxOjpUkIHNNCT7zuQ8JEXGJfXkcKtP4/file#');
        document.getElementById('my-signin2').append(d);
        d.click();
        d.remove();
    });
}