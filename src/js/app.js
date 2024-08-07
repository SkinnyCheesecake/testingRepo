document.addEventListener('DOMContentLoaded', function () {
    shown();
})


const shown = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => shown.observe(el));