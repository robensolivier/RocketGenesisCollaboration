//Function to change background color by elementById

  const divElement = document.getElementById("cardcolor");

  var selectElement = document.getElementById("building-type");
  
  selectElement.addEventListener("change", function() {
    if (selectElement.value === "residential") {
      divElement.style.backgroundColor = ("lightblue")
    } else if (selectElement.value === "commercial") {
     divElement.style.backgroundColor = ("lightcoral")
    } else if (selectElement.value === "industrial") {
      divElement.style.backgroundColor = ("lightgray")
    } 
  });
  
