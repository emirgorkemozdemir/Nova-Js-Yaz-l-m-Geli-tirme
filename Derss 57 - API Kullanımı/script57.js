class Recipe
{
    constructor(_title,_ingredients,_instructions,_servings)
    {
       this.Title=_title;
       this.Ingredients=_ingredients;
       this.Instructions=_instructions;
       this.Servings = _servings;
    }
    
    // Static ile class içerisine sabit değer atılıp
    // new'lemeden o statik değer tüm nesneler için aşağıdaki gibi
    // çağırılabilir.
    // Recipe.x
    static x = "asdofasdf";
}

async function FindImageLink(keyword)
{
    const url = 'https://image-search19.p.rapidapi.com/v2/?q='+keyword+'&hl=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6db8ca36dcmsh78fc808a0576285p155657jsn46346ff0d860',
		'X-RapidAPI-Host': 'image-search19.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    let jsonResult = JSON.parse(result);
	let image_link = jsonResult['response']['images'][0]['image']['url'];
    return image_link;
} catch (error) {
	console.error(error);
}
}




async function getListOfFood(keyword,number)
{
    let Recipes = new Array();
    const url = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query='+keyword+'&offset='+number+'';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6db8ca36dcmsh78fc808a0576285p155657jsn46346ff0d860',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    var jsonResult= JSON.parse(result);

    for(value of jsonResult)
    {
       let recipe = new Recipe(value["title"],value["ingredients"],value["instructions"],value["servings"]);
       Recipes.push(recipe);
    }
   
    return Recipes;
  

} catch (error) {
	console.error(error);
}
}



async function sonucu_al()
{
let keyword = prompt("Enter your search query :");
let number = prompt("Enter the quantity of recipes");
let sonuc = await getListOfFood(keyword,number);

for(deger of sonuc)
{
let resim = await FindImageLink(deger.Title);
document.write("<h1>"+deger.Title+"</h1>");
document.write("<img style='width:600px;height:450px;' src='"+resim+"'>"+deger.Title+"</img>");

document.write("<h2>"+deger.Title+" Ingredients"+"</h2>");
document.write("<p>"+deger.Ingredients+"</p>");
document.write("<h2>"+deger.Title+" Instructions"+"</h2>");
document.write("<p>"+deger.Instructions+"</p>");

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

}
}



    //  for(deger of Recipes)
    // {
    // document.writeln(deger["title"]);
    // }