const Jars = [];
let value = 1;

document.getElementById("add-jar").addEventListener("click", () => {
  let newJar = { id: "", name: "" };
  newJar.id = Math.floor(Math.random() * 1000);
  newJar.name = "Jar" + " " + value;
  value++;
  Jars.push(newJar);

  let a = document.createElement("a");
  a.href = "#";
  a.innerHTML = newJar.name;
  let c = document.createElement("img");
  c.onclick = () => {
    window.location.href =
      "https://stackoverflow.com/questions/17049455/javascript-how-do-i-make-a-javascript-image-link-to-a-page";
  };

  let div = document.createElement("div");
  div.appendChild(c);
  div.appendChild(a);
  c.src = "C:/Users/Admin/Documents/GitHub/thecookiesjarproject/Resourses/bottlewithoutnap.png";
  c.style.width = "15rem";
  c.style.cursor = "pointer";
  div.style.margin = "1rem";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  a.style.textAlign = "center";
  a.style.textDecoration = "none";
  a.style.fontSize = "1.75rem";

  document.getElementById("newjar").appendChild(div);
  console.log(Jars);
});