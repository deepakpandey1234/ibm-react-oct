

// Model
let tnr = { name: 'Nag' };

//Service
let tnrService = {
    doTeach: function () {
        console.log(this.name + " teaching .js");
    }
};


// View
let btn = document.querySelector('.btn-primary');

// btn.addEventListener('click', function () {
//     tnrService.doTeach.call(tnr);
// });

let newF=tnrService.doTeach.bind(tnr);
btn.addEventListener('click',newF);