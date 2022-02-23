const search = () => {
    const input = document.querySelector('.search-block > .form-control')
    const btnSearch = document.querySelector('.search-block > button')

    btnSearch.addEventListener('click', () => {
        const value = input.value
        console.log(value)
    })
}

search()