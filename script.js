var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      auth2 = gapi.auth2.init({
        client_id: '453838071329-10gl814po98ofj5ia7iihsvrq05pmt5g.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    auth2.attachClickHandler(element, {},
        function(googleUser) {
            let data = googleUser.getBasicProfile();
            let obj = {
              url:data.getImageUrl(),
              name:data.getName(),
              email:data.getEmail()
            }
            localStorage.setItem("userData",JSON.stringify(obj));
            window.location.replace("https://signinauth.netlify.app/user_details/index.html");

        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }
startApp()
const customBtn = document.getElementById("customBtn");

customBtn.addEventListener("click", () => {
    startApp()
})




