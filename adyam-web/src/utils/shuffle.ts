export function shuffle(items:string[]){
    //
    console.log("Shuffled");
    return items.sort(() => Math.random() - 0.5);
}
