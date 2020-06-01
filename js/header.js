function openNav() {
    document.getElementById("mySidepanel").style.width = "300px";
    const x  = document.querySelectorAll('.add');
    x[0].classList.add("add-active");
    x[1].classList.add("add-active");


    console.log(x);
    
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    const x  = document.querySelectorAll('.add');
    x[0].classList.remove("add-active");
    x[1].classList.remove("add-active");

  }
 
