onload =  () => {
      document.querySelector("#c").style.display ="block";
      AOS.init();
      
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    setTimeout(()=>{
        document.querySelector("#l").style.display ="none";
    },2500);
};