 
        const lib = document.getElementById("library");
        const fav = document.getElementById("Favourite");
        const read1= document.getElementById("read1");
        const read2 = document.getElementById("read2");
        const pro = document.getElementById("profile");
        
        lib.addEventListener("click", function(){
            window.location.href = "Library.html";
        });


        fav.addEventListener("click", function(){
            window.location.href = "favourite.html";
        });

        read1.addEventListener("click", function(){
            window.location.href = "Reading.html"
        });
        
        read2.addEventListener("click", function(){
            window.location.href = "Read.html"
        });
        

        pro.addEventListener("click", function(){
            window.location.href = "profile.html"
        });

        function profile(){
            window.location.href = "profile.html";
        }

window.history.pushState(null, '', location.href);
window.onpopstate = function () {
  window.history.pushState(null, '', location.href);
};
 
function signout(){
            window.location.href = "login.html";

  window.history.pushState(null, '', location.href);
}