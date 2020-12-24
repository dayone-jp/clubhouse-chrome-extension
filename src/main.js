$(function(){
    $('body').on('click', '.story div[data-type="task"] .section-head .counter', () => {
        $('.tasks .task.completed-task').toggleClass('show')
    })
});