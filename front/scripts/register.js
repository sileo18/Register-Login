const butSubmit = document.querySelector("#butSubmit")


butSubmit.addEventListener("click", (event) => {

  event.preventDefault()

  const inputEmail = document.querySelector("#inputEmail").value
  const inputPassword = document.querySelector("#inputPassword").value

  const postData = {
    email: inputEmail,
    password: inputPassword

  }

    axios.post("http://localhost:3333/register", postData)
    .then((response) => {
      console.log(response)
      const successDiv = document.querySelector("#success")
      successDiv.classList.add("text-4xl")
    })
    .catch((error) => {
      console.log(error)
      const successDiv = document.querySelector("#fail")
      successDiv.classList.add("text-4xl")
      //Manipular Dom
    })
})