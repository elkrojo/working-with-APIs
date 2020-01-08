var xhr = new XMLHttpRequest();

function getData(cb) {
    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        };
    }
}


function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);