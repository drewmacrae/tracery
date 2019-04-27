/**
 * @author Drew
 */

//Fixme I don't work with single item lists because the english grammar is hard
function listOf(listName,items){
    return ["#"+items+"#, #"+listName+"#","#"+items+"# and #"+items+"#"];
}

//FIXME only go through June
//FIXME I don't like the implementation of this
function inSeasonVegetables(){
    var Today = new Date();
    switch(Today.getMonth()){
        case 0:
            return ["beet","bok choy","broccoli","brussel sprouts",
            "cauliflower","chard","kale","leek","onion","radish","spinach"];
        case 1:
            return ["arugula","beet","bok choy","broccoli","cauliflower",
            "chard","kale","leek","onion","radish","spinach"];
        case 2:
            return ["artichoke","arugula","asparagus","beet","bok choy",
            "broccoli","cauliflower","chard","green garlic","kale","leek",
            "onion"];
        case 3:
            return ["artichoke","arugula","asparagus","avacado","beet",
            "bok choy","carrot","cauliflower","chard","garlic","green garlic",
            "kale","leek"];
        case 4:
            return ["artichoke","arugula","asparagus","avacado","beet",
            "cabbage","carrot","cauliflower","chard","garlic","green garlic",
            "kale","leek"];
        case 5:
            return ["avacado","basil","cabbage","carrot","corn","garlic","leek",
            "summer squash","tomato"];
        case 6:
            return ["whatever's in season in July"];
        case 7:
            return ["whatever's in season in August"];
        case 8:
            return ["whatever's in season in September"];
        case 9:
            return ["whatever's in season in October"];
        case 10:
            return ["whatever's in season in November"];
        case 11:
            return ["whatever's in season in December"];
    }
}

//FIXME I only go through June
//FIXME I don't like the implementation of this
function inSeasonCookableVegetables(){
    var Today = new Date();
    switch(Today.getMonth()){
        case 0:
            return ["beet","bok choy","broccoli","brussel sprouts",
            "cauliflower","chard","kale","leek","onion","radish","spinach"];
        case 1:
            return ["beet","bok choy","broccoli","cauliflower","chard","kale",
            "leek","onion","radish","spinach"];
        case 2:
            return ["artichoke","asparagus","beet","bok choy","broccoli",
            "cauliflower","chard","green garlic","kale","leek","onion"];
        case 3:
            return ["artichoke","asparagus","beet","bok choy","carrot",
            "cauliflower","chard","garlic","green garlic","kale","leek"];
        case 4:
            return ["artichoke","asparagus","beet","cabbage","carrot",
            "cauliflower","chard","garlic","green garlic","kale","leek"];
        case 5:
            return ["basil","cabbage","carrot","corn","garlic","leek",
            "summer squash","tomato"];
        case 6:
            return ["whatever's in season in July"];
        case 7:
            return ["whatever's in season in August"];
        case 8:
            return ["whatever's in season in September"];
        case 9:
            return ["whatever's in season in October"];
        case 10:
            return ["whatever's in season in November"];
        case 11:
            return ["whatever's in season in December"];
    }
}

//FIXME weird repetition of ingredients sometimes
//FIXME weird repetition of combining words like "with" and "and"

//FIXME singular and plural in food depends on a bunch of stuff. see mushroom vs
//chicken. Below implementation of protein and descriptiveProtein is clunky

//FIXME vegetables require implementation of descriptive vs quantitative 
//(kale salad, sauteed kales)
var grammars = {
    dinners : {
        "listOfVegetables": listOf("listOfVegetables","vegetable"),
        "vegetable": inSeasonVegetables(),
        "listOfCookableVegetables": listOf("listOfCookableVegetables","cookableVegetable"),
        "cookableVegetable": inSeasonCookableVegetables(),
        "fruit":[],
        "descriptiveProtein": [
            "salmon",
            "bean",
            "lentil",
            "chickpea",
            "chicken",
            "mushroom",
            "bacon",
            "beef",
            "#descriptiveProtein# and #vegetable#"
        ],

        "protein": [
            "salmon",
            "fish",
            "beans",
            "tofu",
            "lentils",
            "chickpeas",
            "chicken",
            "mushrooms",
            "bacon",
            "beef",
            "#protein# and #vegetable#"
        ],

        "adj": ["#adj#, #adj#","fresh","pureed","sauteed","baked","fried","spicy",
        "green chilli","mole","Szechuan","Thai","Cajun","Mediterranean","sweet",
        "rich","paprikash"],
        "optAdj ":["","#adj# "],
        "spice":["turmeric","cinnamon","paprika","cumin","cilantro","parsely",
        "mint","bay","thyme","oregano"],
        "optSpice ":["a hint of #spice# ","#spice# ",""],
        "dish": [
            "a stew of #listOfCookableVegetables# with #optAdj ##descriptiveProtein#",
            "#optSpice ##listOfVegetables# soup with #descriptiveProtein#",
            "#optAdj ##vegetable#, #protein# and rice",
            "#optAdj ##descriptiveProtein# #proteinPreparation#",
            "#optAdj ##spice# chili with #protein#",
            "#pasta# with #protein# and #vegetable#",
            "#specificDish## optAddition#",
            "#vegetable# salad with #listOfVegetables# and #protein#",
            "#dish# with #extra#",
            "#dish## optAddition#",
            "#optAdj ##descriptiveProtein# casserole with #listOfVegetables#",
        ],
        "proteinPreparation":["pot-pie","burger"],
        //specific dishes don't allow for much modification
        "specificDish":["shakshuka","fajitas","ratatouille","lasagna",
        "#descriptiveProtein# tagine"],
        "pasta":["spaghetti","ziti","macaroni","tagliatelle","rigatoni",
        "#extra# tortellini","#extra# ravioli","#vegetable# ravioli",
        "#descriptiveProtein# ravioli","linguine","penne","fettuccine","orzo",
        "#optAdj ##pasta#"],
        "savoryMeal":["dinner","lunch"],
        "!":["",".","!"],
        "let's":["let's","I'll","you should","we will"],
        "origin": [
            "#let's.capitalize# make #dish##!#",
            "Today #let's# make #dish##!#",
            "#let's.capitalize# make #side#, that can go with #dish##!#",
            "I think #dish# might be nice# optAddition##!#",
            "#let's.capitalize# have #dish# for #savoryMeal##!#",
            "#dish.capitalize# for #savoryMeal#?",
        ],
        "side": [
            "#cookableVegetable# chips",
            "sauteed #cookableVegetable#",
            "#vegetable#",
            "#spice# spiced #vegetable#",
            "#side# and #extra#"
        ],
        "extra": [
            "cheese",
            "#optSpice #sour cream",
            "#optSpice #yogurt sauce",
            "yogurt #vegetable# sauce",
            "peanuts",
            "walnuts",
            "slivered almonds",
            "capers",
            "#optSpice #pan sauce",
            "#optSpice ##vegetable# pesto",
            "marinated soba noodles",
            "bacon"
        ],
        " optAddition": [
            " maybe with #side#",
            "",
            " with #extra#"
        ]
    },

}
