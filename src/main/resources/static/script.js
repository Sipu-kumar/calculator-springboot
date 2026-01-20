function add() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    fetch(`/add?a=${a}&b=${b}`)
        .then(response => response.text())
        .then(result => {
            document.getElementById("result").innerText = result;
        });
}

function sub() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    fetch(`/sub?a=${a}&b=${b}`)
        .then(response => response.text())
        .then(result => {
            document.getElementById("result").innerText = result;
        });
}

