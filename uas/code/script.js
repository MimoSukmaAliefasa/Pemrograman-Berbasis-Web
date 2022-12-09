const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value
    users.forEach(user => {
        const isVisible = user.name.includes(value) || user.email.includes(value)
        user.element.classList.toggle("hide", !isVisible)
     })
    })

    fetch("http://127.0.0.1:5501/index.html#populer")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
        })
    })