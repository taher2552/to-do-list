const display_row = document.getElementById("body");
const task = document.getElementById("name");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const button = document.getElementById("btn");
const error = document.getElementById("error");
const filter = document.getElementById("filter");

let priority_array = [];
let task_array = [];

button.addEventListener("click", () => {
  const select = document.getElementById("select").selectedIndex;
  const prior = document.getElementsByClassName("option")[select].value;


  if(task.value==""){
    error.innerText="*please enter task";
    setTimeout(()=>{
      error.innerText="";
    },1000)
   
   return;
  }

  if(prior==""){

    setTimeout(()=>{
      error.innerText="*please select priority";
      error.innerText="";
    },1000)
   return;

  }
  let color_background = "";
  let color="";

  if (prior == "high") {
    color_background = "red";
    
  } 
  else if (prior == "moderate") {
    color_background = "green";
   
  } 
  else if (prior == "low") {
    color_background = "yellow";
    color="brown";
  }

  priority_array.push(prior);
  task_array.push(task.value);

  display_row.innerHTML += `<tr >
        <td style="background-color:${color_background}; color:${color};">${task.value}</td>
        <td style="background-color:${color_background}; color:${color};">${prior}</td>
      <tr>`;

  task.value = "";
 
  

 
});



filter.addEventListener("change", (event) => {
  let level = event.target.value;
  display_row.innerHTML = "";
  button.style.display = "none";
  task.style.display = "none";
  document.getElementById("select").style.display = "none";

  priority_array.forEach((value, i) => {
    if (value == level) {
      let color_background = "";
      let color="";

      if (priority_array[i] == "high") {
        color_background = "red";
      } else if (priority_array[i] == "moderate") {
        color_background = "green";
      } else if (priority_array[i] == "low") {
        color_background = "yellow";
        color="brown";
      }
      display_row.innerHTML += `<tr >
         <td style="background-color:${color_background}; color:${color};" >${task_array[i]}</td>
         <td  style="background-color:${color_background}; color:${color};">${priority_array[i]}</td>
       <tr>`;
    }
  });
});
