const xhr = new XMLHttpRequest();
const url = "https://api.example.com/data";

xhr.open("GET", url, true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log("Datele primite:", response);
  } else {
    console.log("Cererea a eșuat. Cod de stare:", xhr.status);
  }
};

xhr.onerror = function () {
  console.log("Cererea a eșuat.");
};

xhr.send();
