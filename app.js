//The function that does the counting, fizzing and buzzing
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

//Fire all this when the document is ready
$(document).ready(function(){

    $(".text").focus();

    $("body").on("keydown", function(event) {
        //makes an alert if they didn't enter anything
        var added = $.trim($(".text").val());
        var integer = $(".text").val();
        if (event.keyCode == 13){
        if (added == "") {
            alert("please enter a number between 1 and 100");
            } else if (integer <= 100) {
            $("div").empty();
            $("div").append(fizzBuzz(integer));
            } else if (integer > 100 || integer < 1) {
                alert("please enter a number between 1 and 100");
            }
        }
    }); 
});