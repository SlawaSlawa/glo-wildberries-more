const getGoods = () => {
    const URL = 'https://glo-wildberris-default-rtdb.firebaseio.com/db.json'
    const navLinks = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch(URL)
            .then(response => response.json())
            .then(goods => saveData(goods))
    }

    const saveData = data => {
        localStorage.setItem('goods', JSON.stringify(data))
    }

    navLinks.forEach(link => {
        link.addEventListener('click', evt => {
            evt.preventDefault()

            const data = getData()
        })
    })
}

getGoods()