
let user = document.getElementById("user")
let conteudo = document.querySelector("ul")

adicionar = () => {
  conteudo.innerHTML = ''
  axios
    .get(`https://api.github.com/users/${user.value}/repos`)

    .then((response) => {
        response.data
        .map((user) => {
                conteudo.innerHTML += `<li>${user.name}</li>`
            })
            //console.log(response)
    })

    .catch((error) => {
        alert(` ${error.message}`)
    //  console.log(error)
    })
}

