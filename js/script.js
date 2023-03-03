document.addEventListener("DOMContentLoaded", () => {

    function dropdown(dropdownMenuActiveClass) {
        const dropdown = document.querySelector('[data-dropdown]')
        const dropdownTrigger = dropdown.querySelector('[data-dropdown-trigger]')
        const items = dropdown.querySelectorAll('[data-dropdown-item]')
        const input = dropdown.querySelector('[data-dropdown-input]')

        dropdownTrigger.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            e.stopImmediatePropagation()
            dropdown.classList.toggle(dropdownMenuActiveClass)
        })

        items.forEach(item => {
            item.addEventListener('click', () => {
                input.value = item.textContent
                dropdown.classList.remove(dropdownMenuActiveClass)
            })
        })

    }
    dropdown('modal-quiz__dropdown--active')

})