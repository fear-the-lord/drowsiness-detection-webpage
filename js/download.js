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
        d.setAttribute('href', 'https://degoo-production-large-file-us-east1.degoo.me/gCaDqx/zbGhDA/apk/ChSkMhedkcgDpe6oZ9r5zca1rljK2hAA.apk?GoogleAccessId=GOOG1ERGS5Y62VUMTEDIF6DORMJGWTJNXVR4GZLNW6KFP7E4PMCAYMA5BR6RA&Expires=1604124308&Signature=%2F1Rj%2Fdj%2BJCzfG4FbojdQ9MYUW3s%3D&use-cf-cache=true&response-content-disposition=attachment;%20filename=%22Drowsiness%20Detector.apk%22&ngsw-bypass=1');
        d.setAttribute('hidden', 'hidden');
        d.setAttribute('download', 'https://degoo-production-large-file-us-east1.degoo.me/gCaDqx/zbGhDA/apk/ChSkMhedkcgDpe6oZ9r5zca1rljK2hAA.apk?GoogleAccessId=GOOG1ERGS5Y62VUMTEDIF6DORMJGWTJNXVR4GZLNW6KFP7E4PMCAYMA5BR6RA&Expires=1604124308&Signature=%2F1Rj%2Fdj%2BJCzfG4FbojdQ9MYUW3s%3D&use-cf-cache=true&response-content-disposition=attachment;%20filename=%22Drowsiness%20Detector.apk%22&ngsw-bypass=1');
        document.getElementById('my-signin2').append(d);
        d.click();
        d.remove();
    });
}