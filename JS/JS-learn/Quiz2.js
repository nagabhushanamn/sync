

function teach() {

    let name = "Nag"; // moved to heap

    try {
        console.log('teaching....');


        setTimeout(function () {
            console.log(name + ' teaching next topic after timout-event');
            if (1 == 2)
                throw new Error('hate new-topic');

        }, 5000)

        console.log('current teaching ends');
    } catch (e) {
        console.log('i caught ' + e.message)
    }

}

teach();