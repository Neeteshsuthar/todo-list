function getUserData() {
  var useritem = document.getElementById("input").value;

  console.log(useritem);
  if (useritem === "") {
    alert("enter item");
  } else {
    function userData() {
      var datalist = document.getElementById("datalist");
      datalist.style.width = "600px";

      datalist.style.backgroundColor = "white";
      datalist.style.padding = "30px";

        var row = document.createElement("tr");
                    row.style.overflow = "scroll";

      datalist.appendChild(row);

      var data = document.createElement("td");
      data.style.width = "200px";
      data.style.height = "10px";
      data.textContent = useritem;
      row.appendChild(data);

      var data2 = document.createElement("td");
      data2.style.textAlign = "right";
      row.appendChild(data2);

      var dataeditbutton = document.createElement("button");
      dataeditbutton.setAttribute = ("id", "editbutton");
      dataeditbutton.textContent = "edit";
      dataeditbutton.style.width = "50px";
      dataeditbutton.style.height = "30px";
      dataeditbutton.style.border = "0px";
      dataeditbutton.style.borderRadius = "5px";
      dataeditbutton.style.color = "white";
      dataeditbutton.style.backgroundColor = "rgba(28, 218, 28, 0.541)";
      data2.appendChild(dataeditbutton);
      dataeditbutton.addEventListener("click", function () {
        data.textContent = prompt("enter data", useritem);
        if (data.textContent === "") {
          row.style.display = "none";
        } 
      });

      var data3 = document.createElement("td");
      data3.style.textAlign = "right";
      row.appendChild(data3);

      var datadeletebutton = document.createElement("button");
      datadeletebutton.textContent = "delete";
      datadeletebutton.style.width = "50px";
      datadeletebutton.style.height = "30px";
      datadeletebutton.style.border = "0px";
      datadeletebutton.style.color = "white";
      datadeletebutton.style.borderRadius = "5px";
      datadeletebutton.style.backgroundColor = "rgba(28, 218, 28, 0.541)";
      data3.appendChild(datadeletebutton);
      datadeletebutton.addEventListener("click", function () {
        row.style.display = "none";
      });
    }
    userData();
  }
  function emptyinput() {
    var useritem = (document.getElementById("input").value = "");
  }
  emptyinput();
}
