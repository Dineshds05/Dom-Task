
    function AddData(){
     var tr = document.createElement("tr")
     var td1 = document.createElement("td");
     var td2 = document.createElement("td");
     var td3 = document.createElement("td");
     var td4 = document.createElement("td");
     var td5 = document.createElement("td");
     var td6 = document.createElement("td");
     var td7 = document.createElement("td");
     var td8 = document.createElement("td");
    td1.innerHTML = document.getElementById("first").value;
    td2.innerHTML = document.getElementById("last").value;
    td3.innerHTML = document.getElementById("address").value;
    td4.innerHTML = document.getElementById("pincode").value;
    td5.innerHTML = document.getElementById("gender").value;
    td6.innerHTML = document.getElementById("food").value;
    td7.innerHTML = document.getElementById("state").value;
    td8.innerHTML = document.getElementById("country").value;
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)
    tr.append(td7)
    tr.append(td8)
    document.querySelector("#bodytab").appendChild(tr); 
    
  }
 
 document.getElementById("btn-clk").addEventListener("click", (event)=>{
  event.preventDefault()
  AddData()
 })

 document.getElementById("btn-clk1").addEventListener("click", (event)=>{
  event.preventDefault()
  document.getElementById("bodytab").remove()
 })
