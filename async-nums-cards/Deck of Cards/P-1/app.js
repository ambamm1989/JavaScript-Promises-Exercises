let favNumber : number =  15
let baseURL : string = "http://numbersapi.com";

async function part1() : Promise<void> {
    let data : any = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}
part1();

const favNumber : number[] = [7, 11, 22];
async function part2() : Promise<void>{
    let data : any = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}
part2();

async function part3() : Promise<void> {
    let facts : any[] = await Promise.all(
        Array.from({ length: 4 }, () : any => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data : any => {
        $(`body`).append(`<p>${data.text}</p>`)
    });
}
part3();