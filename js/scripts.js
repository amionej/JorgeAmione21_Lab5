$(document).ready(function() {
    $("#addButton").on("click", function(e) {
        let inputValue = $("#inputt").val();
        console.log(inputValue);
        e.preventDefault();
        $("#list").append(
            `<li class = "listitem">
            <p>${inputValue}</p>
            <button class ="check"> check </button>
            <button class ="deleteButton"> delete </button>
            </li>`);
    });
    $(document).on("click", ".deleteButton", function(e){
        e.preventDefault();
        var listitem = $(this).parent(); 
        listitem.remove();
    });
    $(document).on("click", ".check", function(e){
        e.preventDefault();
        var paragraph = $(this).parent().children("p"); 
        if ($(paragraph).hasClass("decorate")){
            $(paragraph).removeClass("decorate");
        }
        else{
            $(paragraph).addClass("decorate");
        }
        
    });

});
