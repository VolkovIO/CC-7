let url = "http://localhost:8080/api";

$('#btn').click(function () {send_rest()});

function send_rest(){
    let body = $('#rest').val().trim();
    fetch(url, {
        method: 'POST',
        body: body,
        headers: {'content-type': 'application/json'}
    })
        .then(response => response)
        .then(re => {
            let a = re.text();
            console.log("Запрос отправлен    " + a);
            document.querySelector("#result").innerText=a;
        })

}