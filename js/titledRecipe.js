console.log("titledRecipe");

$(document).ready(function() {

    function Recipe(tracelist){

    }

    function Recipe(){

    }

    function buildRecipe() {
        $("#ingredients").html("");

        //var grammar = tracery.createGrammar(grammars[name]);
        $("#title").html("test");//html(grammar.toText());

        for (var i = 0; i < 20; i++) {
            var s = "hello world";//grammar.flatten("#origin#");
            //console.log(s);
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });

            $("#recipe").append(div);

        }

    }

    setTimeout(function() {
        buildRecipe();
    }, 10);
});
