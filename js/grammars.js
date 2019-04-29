/**
 * @author Drew
 */

//Fixme I don't work with single item lists because the english grammar is hard
function listOf(listName,items){
    return ["#"+items+"#, #"+listName+"#","#"+items+"# and #"+items+"#"];
}

//"[ingredients:#ingredients# artichoke]artichoke" for example. This appends an 
//ingredient to an ingredient list
function ingredient(items){
    for (var i = items.length - 1; i >= 0; i--) {
        items[i]="[ingredients:#ingredients#, "+items[i]+"]"+items[i]
    }
    //console.log(items);
    return items;
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
            "broccoli","cauliflower","chard","kale","leek",
            "onion"];
        case 3:
            return ["artichoke","arugula","asparagus","avacado","beet",
            "bok choy","carrot","cauliflower","chard",
            "kale","leek"];
        case 4:
            return ["artichoke","arugula","asparagus","avacado","beet",
            "cabbage","carrot","cauliflower","chard",
            "kale","leek"];
        case 5:
            return ["avacado","basil","cabbage","carrot","corn","leek",
            "summer squash","tomato"];
        case 6:
            return ["avacado","basil","corn","cucumber","eggplant","potato",
            "summer squash","tomato"];
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
            return ["basil","corn","eggplant","garlic","potato",
            "summer squash","tomato"];
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

//FIXME implementation of cookable and vegetable is clunky

//build lists with a mix of ingredients and non-ingredients
var descriptiveProteinList = ingredient(["salmon", "fish", "bean", "lentil", 
    "chickpea", "chicken", "mushroom", "beef"]);
descriptiveProteinList.push("#descriptiveProtein# and #vegetable#");

var proteinList = ingredient([ "salmon", "fish", "beans", "tofu", "lentils",
    "chickpeas", "chicken", "mushrooms", "beef"]);
proteinList.push("#protein# and #vegetable#");

var pastaList = ingredient(["spaghetti","ziti","macaroni","tagliatelle",
    "rigatoni","linguine","penne","fettuccine","orzo"]);
pastaList.push("[filling:#extra#][ingredients:#ingredients#, flour and eggs (to make pasta) or #filling# tortellini]#filling# tortellini");
pastaList.push("[filling:#extraOrVegetableOrDescriptiveProtien#][ingredients:#ingredients#, flour and eggs (to make pasta) or #filling# ravioli] #filling# ravioli");
pastaList.push("#optAdj ##pasta#");

var extraList = ingredient([
            "cheese",
            "peanuts",
            "walnuts",
            "slivered almonds",
            "capers",
            "bacon"]);
extraList.push("[ingredients:#ingredients#, sour cream]#optSpice #sour cream");
extraList.push("[ingredients:#ingredients#, yogurt]#optSpice #[ingredients:#ingredients#, salt and pepper to taste]yogurt sauce");
extraList.push("yogurt #vegetable# sauce[ingredients:#ingredients# thinly sliced, yogurt]");
extraList.push("[ingredients:#ingredients#, minced onion, wine, stock, butter]#optSpice #pan sauce[ingredients:#ingredients#, salt and pepper to taste]");
extraList.push("#optSpice ##vegetable# pesto[ingredients:#ingredients#, oil, nuts, garlic, parmesan]");
extraList.push("[ingredients:#ingredients#, soba noodles, lime, sesame oil, rice wine vinegar, sugar]marinated soba noodles");

var grammars = {
    test : {
        "origin":["helloWorld!"]
    },
    dinners : {
        "origin": ["#setLets##message#"],
        "message":[
            "#lets.capitalize# make #dish##!#",
            "Today #lets# make #dish##!#",
            "#lets.capitalize# make #side#, that can go with #dish##!#",
            "I think #dish# might be nice# optAddition##!#",
            "#lets.capitalize# have #dish# for #savoryMeal##!#",
            "#dish.capitalize# for #savoryMeal#?",
        ],
        "dish": ["[ingredients:Ingredients]#dishDescription#"],
        "dishDescription":[
            "a stew of #listOfCookableVegetables# with #optAdj ##descriptiveProtein#",
            "#optSpice ##listOfVegetables# soup with #protein#",
            "[ingredients:#ingredients#, rice]#optAdj ##vegetable#, #protein# and rice",
            "#optAdj ##descriptiveProtein# #proteinPreparation#",
            "[ingredients:#ingredients#, beans, onions, tomatoes, cumin, chili]#optAdj ##spice# chili with #protein#",
            "#pasta# with #protein# and #vegetable#",
            "#specificDish## optAddition#",
            "#vegetable# salad with #listOfVegetables# and #protein#",
            "#dish# with #extra#",
            "#dish## optAddition#",
            "#optAdj ##descriptiveProtein# casserole with #listOfVegetables#",
        ],

        "listOfVegetables": listOf("listOfVegetables","vegetable"),
        "listOfCookableVegetables": listOf("listOfCookableVegetables","cookableVegetable"),

        "vegetable": ingredient(inSeasonVegetables()),
        "cookableVegetable": ingredient(inSeasonCookableVegetables()),
        "fruit":ingredient(["apple","orange"]),
        "descriptiveProtein":descriptiveProteinList,
        "protein":proteinList,
        "pasta":pastaList,

        "adj": ["#adj#, #adj#",
        "[ingredients:#ingredients#, garlic, butter, parsely]garlic",
        "[ingredients:#ingredients#, green-garlic]green-garlic",
        "[ingredients:#ingredients#, garlic, lemon juice, lemon zest]fresh","pureed","sauteed","baked","fried",
        "[ingredients:#ingredients#, green chile]green chile",
        "[ingredients:#ingredients#, peppers, cinnamon, chocolate, black pepper, cumin, salt to taste]mole",
        "[ingredients:#ingredients#, Szechuan peppercorn, chiles, garlic, ginger, star anise, soy sauce, rice wine vinegar]Szechuan",
        "[ingredients:#ingredients#, curry, water chestnuts, corn, carrots, coconut milk]Thai",
        "[ingredients:#ingredients#, butter, flour, garlic, paprika, cayanne pepper, thyme]Cajun",
        "[ingredients:#ingredients#, couscous, za'atar, pine nuts]za'atar",
        "[ingredients:#ingredients#, lemon, parsely, garlic, chopped tomatoes]Mediterranean",
        "[ingredients:#ingredients#, #fruit#]sweet",
        "[ingredients:#ingredients#, stock, buttor or cream]rich",
        "[ingredients:#ingredients#, red pepper flakes]spicy"],
        "optAdj ":["","#adj# "],
        "spice":ingredient(["turmeric","cinnamon","paprika","cumin","cilantro","parsely",
        "mint","bay","thyme","oregano","garam masala","rosemary","sage"]),
        "optSpice ":["a hint of #spice# ","#spice# ",""],
        "proteinPreparation":[
        "[ingredients:#ingredients#, pie crust, butter, flour, diced potatoes,  peas, diced carrots]pot-pie",
        "[ingredients:#ingredients#, chopped onion, pepper, bread crumbs, bun]burger"],
        //specific dishes don't allow for much modification
        "specificDish":["[ingredients:#ingredients#, onion, tomatoes, eggs, salt and pepper to taste]shakshuka",
            "[ingredients:#ingredients#, onions, peppers, chili powder]fajitas",
            "[ingredients:#ingredients#, onions, eggplant, squash, peppers, bay leaves, salt and pepper to taste]ratatouille",
            "#descriptiveProtein# [ingredients:#ingredients#, lasagna noodles, tomato sauce, ricotta, mozzarella, parmesan]lasagna",
            "#descriptiveProtein# [ingredients:#ingredients#, onion, carrots, peas, potatoes, rasins]tagine"],
        "savoryMeal":["dinner","lunch"],
        "!":["",".","!"],
        "setLets":["[lets:let's]","[lets:I'll]","[lets:you should]","[lets:we will]"],
        "side": ["[ingredients:Ingredients]#sideDescription#"],
        "sideDescription":[
            "#cookableVegetable# chips",
            "sauteed #cookableVegetable#",
            "#vegetable#",
            "#spice# spiced #vegetable#",
            "#side# and #extra#"
        ],
        "extra": extraList,
        " optAddition": [
            ", maybe with #side#",
            "",
            " with #extra#"
        ],
        "extraOrVegetableOrDescriptiveProtien":["#extra#","#vegetable#","#descriptiveProtein#"],

    },

}
