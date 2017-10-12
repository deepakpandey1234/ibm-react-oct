

// using DOM API

let box = document.querySelector('.alert');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');

showBtn.addEventListener('click', function (e) {
    box.style.display = '';
})

hideBtn.addEventListener('click', function (e) {
    box.style.display = 'none';
})
