$('document').ready(() => {

const url = 'https://oscarbalidb.herokuapp.com/fruit/allFruits';

    load();

    function load() {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => JSON.parse(data))
        .catch((err) => console.log(err));
    }    
    
    function render(data) {
        let fruits = [];

        console.log(data);
    }

});