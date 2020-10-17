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
        d.setAttribute('href', 'https://drive.google.com/u/0/uc?export=download&confirm=Prax&id=1sZH_Ve3ihJ2olJMugiGWYsil7UhvL4R3');
        d.setAttribute('hidden', 'hidden');
        d.setAttribute('download', 'https://drive.google.com/u/0/uc?export=download&confirm=Prax&id=1sZH_Ve3ihJ2olJMugiGWYsil7UhvL4R3');
        document.getElementById('my-signin2').append(d);
        d.click();
        d.remove();
    });
}