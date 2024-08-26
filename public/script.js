// // public/script.js
// document
//   .getElementById("noteForm")
//   .addEventListener("submit", async function (event) {
//     event.preventDefault();
//     const noteContent = document.getElementById("noteContent").value;

//     const response = await fetch("/notes", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ content: noteContent }),
//     });

//     const result = await response.json();
//     console.log(result);
//   });
