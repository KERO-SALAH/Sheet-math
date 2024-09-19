window.addEventListener("message", function (event) {
  var iframe = document.getElementById("blog-iframe");
  iframe.style.height = event.data + "px";
});


function Search() {
  const val = document.getElementById("url").value;
  if (
    val === "https://codeforces.com/group/MWSDmqGsZm/contest/223338/problem/A"
  ) {


    window.location.href = "/Sheet_Math/a.html";
  }else if (
    val === "https://codeforces.com/group/MWSDmqGsZm/contest/223338/problem/B"
  ) {

 
      
     

      fetch("/Sheet_Math/b.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("ans").innerHTML = data;
        });
   
  



    //window.location.href = "/Sheet_Math/b.html";
  }
}
