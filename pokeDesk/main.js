

//     fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
//    .then(response => response.json())

//    .then(json=>{datalist(json.results);
//     console.log(json.results)})

    
//     const datalist = (data) => {
    
//     document.querySelector('#pokemons').innerHTML =
//     data.map((item,i) =>{return `<li>
//      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg"/>
//      ${item.name}`
//     }).join('')

//     }




    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
    .then(response => response.json())
 
    .then(json=>{
        const fetches = json.results.map(item=>{
            return fetch(item.url).then(res=>res.json())
        })

        Promise.all(fetches).then(res=>datalist(res))
    })


const datalist = (data) => {
    document.querySelector('#pokemons').innerHTML = data.map((item,i) =>{
        return `<div class = 'card'>
        <img src="${item.sprites.other.dream_world.front_default}"/>
        <p>${item.name}</p></div>`
    }).join('')
    }



    













// fetch('https://pokeapi.co/api/v2/pokemon/?limit=384')
//        .then(response => response.json())
//        .then(json => {dataList(json);
//        })

//        const dataList = (data)=> {
//         document.querySelector('#pokemons').innerHTML=
//         data.map(item=>{return `<li>${item}</li>`}).join('')

//        }





// const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
//   fetch(baseUrl)
//     .then(response => {
//       const responseJson = response.json()
//       return responseJson
//     })
//     .then(data => {
//       const pokemons = data.results
//       pokemons.forEach(pokemon => {
//         document.getElementById('pokemons')
//           .innerHTML('beforeend', `<li("${pokemon.url}")'>${pokemon.name}</li>`)
//       })
//     })