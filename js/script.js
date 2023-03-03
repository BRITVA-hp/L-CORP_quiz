document.addEventListener("DOMContentLoaded", () => {

    function dropdowns(dropdownMenuActiveClass) {
        const dropdowns = document.querySelectorAll('[data-dropdown]')

        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                if (!e.target.matches('[data-dropdown-menu]') && !e.target.closest('[data-dropdown-menu]')) dropdown.classList.toggle(dropdownMenuActiveClass)
            })
        })

        window.addEventListener('click', (e) => {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove(dropdownMenuActiveClass)
            })
        })
    }
    dropdowns('modal-quiz__dropdown--active')


// Close the dropdown menu if the user clicks outside of it
//     window.onclick = function(event) {
//         if (!event.target.matches('.dropbtn')) {
//
//             var dropdowns = document.getElementsByClassName("dropdown-content");
//             var i;
//             for (i = 0; i < dropdowns.length; i++) {
//                 var openDropdown = dropdowns[i];
//                 if (openDropdown.classList.contains('show')) {
//                     openDropdown.classList.remove('show');
//                 }
//             }
//         }
//     }

})