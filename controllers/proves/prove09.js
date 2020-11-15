const fetch = require("node-fetch");
exports.getProve08 = (req, res, next) => {
  let page = req.query.page;
  let pokeArray = [];
  let fivePokemon = [];
  const reqest = async () => {
    for (let i = 1; i <= 40; i++){
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      let json = await response.json();
      let pokemon = { name: json.name, img: json.sprites.front_default }
      fivePokemon.push(pokemon);
      if (fivePokemon.length === 5){
        pokeArray.push(fivePokemon);
        fivePokemon = [];
      }
    }
    if (page === undefined){
      page = 1;
    }
    let nextpage = Number(page) + 1;
    let previouspage = Number(page) - 1;
    res.render('pages/prove09/prove09', {
      title: 'Prove 09',
      path: '/prove09',
      pokemon: pokeArray[page],
      next: nextpage,
      previous: previouspage,
    });
  }
  reqest();


 
  //   for (let i = 1; i <= 150; i++) {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()).then(data => {
        
  //       pokeArray.push(pokemon);
  //     })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //   }
 


  // console.log(pokeArray);
 
}





























// let pokeArray = [];
    // const numPokemon = 150;




    // const getPokemon = async id =>{
    //     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    //     const res = await fetch(url);
    //     const pokemon = await res.json
    //     pokeArray.push(pokemon);
    // }

    // const fetchPokemon = async () =>{
    //     for (let i = 1; i <= numPokemon; i++){
    //         await getPokemon(i);
    //     }
    // }

    // fetchPokemon();

    // console.log(pokeArray);