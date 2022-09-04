// Add your code here
function submitData(name, email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: "Steve",
          email: "steve@steve.com",
        }),
      })
    
};
fetch("http://localhost:3000/users", submitData)
    .then((responce) => responce.json())
    .then((object) => console.log(object))
    .catch((error) => {
        alert("Unauthorized Access")
        console.log(error.message)
    });
