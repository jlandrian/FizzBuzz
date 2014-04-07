//The function that does the counting, fizzing and buzzing
    function fizzBuzz() {
        for (var i = 1; i <= 100; i++) {
            if (i % 15 === 0) {
                $("div").append("FizzBuzz, ");
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

    $("button").on("click", function() {
        //makes an alert if they didn't enter anything
        var added = $.trim($(".text").val());
        if (added == "") {
            alert("please enter a number between 1 and 100");
            } else {
            //appends fizzBuzz to the DIV
            $("div").append(fizzBuzz);
            }
    });
});