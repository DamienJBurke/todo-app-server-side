
document.addEventListener('keydown',(event) => {
    if (event.keyCode ==13 && !event.shiftKey){

        console.log(event.target);
        event.preventDefault();
        console.log(document.getElementById(`textarea-${event.target.id}`));
        document.getElementById(`textarea-${event.target.id}`).value = event.target.innerHTML;

        console.log(document.getElementById(`textarea-${event.target.id}`).value);

        document.getElementById(`textarea-${event.target.id}`).closest('form').submit();
        
    }
});


const submitForm = function(textareaId,divId,formId) {
    document.getElementById(divId).addEventListener('keypress', (event) => {
        if(event.keyCode == 13 && !event.shiftKey){
            event.preventDefault();
            document.getElementById(textareaId).value = document.getElementById(divId).innerHTML;
            console.log(document.getElementById(formId));
            document.getElementById(textareaId).closest('form').submit();
        } 
    });
    return true;
};
//submitForm('newTask','test','createForm');

const test = function(textareaId,divId,formId) {
    document.addEventListener('keydown',(event) => {
        if (event.keyCode ==13 && !event.shiftKey){
            console.log(event.target);
        }
    });
    document.getElementById(divId).addEventListener('keypress', (event) => {

        if(event.keyCode == 13 && !event.shiftKey){

            event.preventDefault();
            document.getElementById(textareaId).value = document.getElementById(divId).innerHTML;
            console.log(document.getElementById(formId));
            document.getElementById(textareaId).closest('form').submit();
        } 
    });
};



/*
document.getElementById('test').addEventListener('keypress', (event) => {
    if(event.keyCode == 13 && !event.shiftKey){
        event.preventDefault();
        document.getElementById("newTask").value = document.getElementById('test').innerHTML;
        console.log(document.getElementById('createForm'));
        document.getElementById("newTask").closest('form').submit();
    } 
});
*/