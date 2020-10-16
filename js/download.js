function download(googleUser) {
    var profile = googleUser.getBasicProfile();
    sendEmail(profile.getId(), profile.getName(), profile.getImageUrl(), profile.getEmail());
}
function sendEmail(id, name, image, email) { 
    Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "rajarsi3997@gmail.com", 
        Password: "rlbquqrdqkdngvkb", 
        To: 'ultradevsofficial2020@gmail.com', 
        From: email, 
        Subject: "Sample", 
        Body: "<table style=\"width:100%\"><tr><td>Google ID: " + id + "</td></tr><tr><td>Name: " + name + "</td></tr><tr><td>Image URL: " + image + "</td></tr><tr><td>Email: " + email + "</td></tr></table>",
    }).then(function (message) { 
        var d = document.createElement("a");
        d.setAttribute('href', 'https://drive.google.com/uc?export=download&id=14wWi8PCm2IQjbi50impiTm-0Jz1YU8nQ');
        d.setAttribute('hidden', 'hidden');
        d.setAttribute('download', 'https://drive.google.com/uc?export=download&id=14wWi8PCm2IQjbi50impiTm-0Jz1YU8nQ');
        document.getElementById('my-signin2').append(d);
        d.click();
        d.remove();
    });
}