//The function that does the looping, fizzing and buzzing
    function fizzBuzz(count) {
        for (var i = 1; i <= count; i++) {
            if (i % 15 === 0) {
                $("div").append("fizzBuzz, ");
        } else if (i % 3 === 0){
                $("div").append("fizz, ");
        } else if (i % 5 === 0){
                $("div").append("buzz, ");
        } else {
                $("div").append(i + ", ");
        }
    }
        $(".text").focus();
};


//The function that handles user input
    function findNum() {
        var added = $.trim($(".text").val());
        var integer = $(".text").val();
        if (added == "") {
            alert("please enter a number between 1 and 100");
            } else if (integer <= 100) {
            $("div").empty();
            $("div").append(fizzBuzz(integer));
            } else if ((isNaN(integer)) || integer > 100 || integer <= 0 || integer != 0) {
                alert("please enter a number between 1 and 100");
            } 
        $(".text").focus();
    };

//Fire all this when the document is ready
$(document).ready(function(){
    $(".text").focus();
    $("body").on("keyup", function(event) {
        if (event.keyCode == 13){
            findNum();
        }
    });
    
$("button").on('click', function() {
        findNum();                   
    });
});