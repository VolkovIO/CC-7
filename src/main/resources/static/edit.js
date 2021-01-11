let url = "http://localhost:8080/api";

jQuery(document).ready(function() {
// Ваш код здесь...
    console.log("Start");
    getAllTasks();
});


$('#anq').click(function () {addNewQuestion();})


function addNewQuestion() {
    let newQuestion = {
        uuid: $('#id-name').val(),
        theme: $('#theme').val(),
        description: $('#description').val(),
        mark: $('#mark').val(),
        rightAnswer: $('#rightanswer').val(),
        incorrectAnswer1: $('#wronganswer1').val(),
        incorrectAnswer2: $('#wronganswer2').val(),
        incorrectAnswer3: $('#wronganswer3').val(),
        chapter: $('#chapter').val(),
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newQuestion),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response)
        .then(re => {
            $("#exampleModal").modal('hide');
            getAllTasks();
        })
}


function getAllTasks() {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            $("#admin_table").empty();
            $(data).each(function (i, task) {
                $("#admin_table").append(
                    $("<tr>").append(
                        $("<td>").text(task.uuid),
                        $("<td>").text(task.theme),
                        $("<td>").text(task.description),
                        $("<td>").text(task.mark),
                        $("<td class='bg-success text-white'>").text(task.rightAnswer),
                        $("<td>").text(task.incorrectAnswer1),
                        $("<td>").text(task.incorrectAnswer2),
                        $("<td>").text(task.incorrectAnswer3),
                        $("<td>").text(task.chapter)
                    )
                );
            });
        });
}




function deleteTask(){
    let id = document.getElementById("del").value;

    fetch(url+'/'+id, {method: 'DELETE'})
        .then(response => response)
        .then((re) => {
            getAllTasks();
        })

}