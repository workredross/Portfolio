// When the browser is ready...
$(function() {
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDvf1BkIw-IZ_NFFd1g_QI6qMLMrVFuXOk",
        authDomain: "form-submit-44689.firebaseapp.com",
        databaseURL: "https://form-submit-44689.firebaseio.com",
        projectId: "form-submit-44689",
        storageBucket: "",
        messagingSenderId: "559169214737"
        };
  
    firebase.initializeApp(config);

    // Reference messages collection
    
    var messagesRef = firebase.database().ref('messages');

    $( ".button" ).click(function(e) {
        e.preventDefault();
        var $name = $('#name').val();
        var $email = $('#email').val();
        var $message = $('#msg').val();
        saveMessage($name, $email, $message);
        setTimeout(function() {
            $('#name').val('');
            $('#email').val('');
            $('#msg').val('');
            $("#confirm").removeClass("hide");
        }, 1000);
        console.log(10);
        setTimeout(function(){
            $("#confirm").addClass("hide")
        }, 2500);
        
    });

    function saveMessage(name, email, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
        name: name,
        email:email,
        message:message
    });
  }
});