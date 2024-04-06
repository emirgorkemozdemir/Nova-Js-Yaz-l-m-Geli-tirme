class Animal
{
    constructor(_name,_location,_taxonomy)
    {
       this.Name = _name;
       this.Location = _location;
       this.Taxonomy = _taxonomy;
    }
}

async function GetImageURL(keyword)
{
const url = 'https://image-search19.p.rapidapi.com/v2/?q='+keyword+'&hl=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2df2273180msha95b2a2e309084dp1944b8jsnc44917ebd81a',
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


async function GetAnimal(animal_name)
{
    const url = 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name='+animal_name+'';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6db8ca36dcmsh78fc808a0576285p155657jsn46346ff0d860',
		'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
	}
};
let animal_list = [];
try {
	const response = await fetch(url, options);
	const result = await response.text();
    let jsonResult = JSON.parse(result);

    for(value of jsonResult)
    {
       let single_animal = new Animal(value['name'],value['locations'],value['taxonomy']['class']);
       animal_list.push(single_animal);
    }

    return animal_list;
} catch (error) {
	console.error(error);
}
}

async function result_function()
{
let keyword = prompt("Enter your search query");
let result = await GetAnimal(keyword);

for(animal of result)
{
debugger;
let image_url = await GetImageURL(animal.Name);
document.write("<h1>"+animal.Name+"</h1>");
document.write("<img style='width:500px;height:300px;' src='"+image_url+"'></img>");
document.write("<h2>Location</h2>");
document.write("<p>"+animal.Location+"</p>");
document.write("<p><strong>"+animal.Name+" Taxonomy:</strong>"+animal.Taxonomy+"</p>");
}

}

result_function();