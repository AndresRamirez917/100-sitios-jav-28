function addNav(){
    const navLinks = ["index.html", "trailer.html", "cast.html"];
    const navNames = ["THE BLAIR WITCH PROJECT", "TRAILER", "CAST"];
    for(i = 0; i < navLinks.length; i++){
        for(j = 0; j < navNames[i].length; i++){
            const li = document.createRange().createContextualFragment(`
                
                <li><a href="${navLinks[i]}">${navNames[i]}</a></li>
                     
                `)
                const lista = document.querySelector('.lista');
                lista.append(li);
        }
    }
}



async function getData(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    const jsonArr = character.results.map(elemento => Object.entries(elemento));
    console.log(jsonArr)
    const data = character.results.slice(0,3);
    character.results.forEach(element => {
        const randInt = randomData(1, jsonArr.length);
        const ranIndex = randInt;
        for(i = 0; i <= data.length; i++ ){
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                    
                    <div class="card cast-card-${data}">
                        <img src="${jsonArr[ranIndex][8][1]}" alt="">
                        <hr>
                        <div class="cast-text">
                            <h1>${jsonArr[ranIndex][1][1]}</h1>
                            <h2>as ${jsonArr[ranIndex][3][1]}</h2>
                        </div>
                    </div>

                    `)
                    const cast_row = document.querySelector('.cast-row');
                    cast_row.append(card)
            }
        }
        function randomData(min, max){
            return Math.floor(Math.random()*(max - min + 1) + min);
        }
    });
}
getData()
addNav()