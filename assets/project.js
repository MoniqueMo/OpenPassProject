





$(document).ready(function() {

    var category = "american";
    var latitude = "29.684885"
    var longitude ="-95.410875"
    
    var key = "CCqam6P48aTcR7ZlcouEZvO9ibZrlVcnY73Fkx2eCoEZbyKweGuzQW2RNP5OxHR9Xhdpbi2CAYybGFxuPk1RGniw4fGpRrktdGE-MXJzWI5voJRoMH7L-KriU5sVXHYx";
    queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?category=" + category + "&latitude=" + latitude + "&longitude=" + longitude;

    $.ajax({
        url: queryURL,
        headers: {
            'Authorization': 'Bearer ' + key,
        },
            method: "GET"
    })
        .then(function (response) {
            console.log(response)
    });
    if ($("#newUser").length > 0) {
        userScript("foruser");
    }
    });
    
    //firebase
    function userScript(value) {
    var config = {
        apiKey: "AIzaSyCiDAuplJVOiq3cm4zAcvU3RN9IE3_Ug9g",
        authDomain: "openpass-signup.firebaseapp.com",
        databaseURL: "https://openpass-signup.firebaseio.com",
        projectId: "openpass-signup",
        storageBucket: "",
        messagingSenderId: "15860742932"
    };
    firebase.initializeApp(config);
    var b = firebase.database().ref("messages");
    $("#newUser").submit(function(config) {
        $(this), console.log("Submit to Firebase");
        var c = $("#name").val(),
        d = $("#email").val(),
        f = { name: c, email: d };
        return (
        b.push(f).then(function(config) {
            $(".sucess").css("display", "block"),
            $(".sucess-none").css("display", "none");
        }),
        !1
        );
    });
}