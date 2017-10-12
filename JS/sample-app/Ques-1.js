

function doTeach() {
    let tnrName = "Nag"; // Moved to heap before teach-context destroy
    try {
        console.log(tnrName + 'teaching topic-1');
        //throw new Error('hate-topic-1');
        setTimeout(function () {
            console.log(tnrName + 'teaching topic-2 after timeout');
            //throw new Error('hate-topic-2');
        }, 5000);
        console.log('topic-1 end');
    } catch (e) {
        console.log('i caught ' + e.message);
    }

}

doTeach();