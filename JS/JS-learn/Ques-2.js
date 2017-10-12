



let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        let me=this;
        let doLearn = function () {
            console.log(this.name + ' learning .js from ' + me.name);
        }
        // doLearn();
        let emp = { name: 'IBM' };
        doLearn.call(emp);
    }
};

tnr.doTeach();

let newTnr={name:'Ria'};
tnr.doTeach.call(newTnr);