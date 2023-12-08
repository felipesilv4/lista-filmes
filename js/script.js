const apikey = '6b9e57f1'
const frmPesquisa = document.querySelector('form') 

frmPesquisa.onsubmit = (e) =>{
    event.preventDefault();
    
    const pesquisa = e.target.pesquisa.value;

    if (pesquisa == "") {
        alert('Preencha o Campo!');
        return;
    }
    fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${pesquisa}`)
        .then(result => result.json())
        .then(json => carregarLista(json));
}

    const carregarLista = (json) => {
        const lista = document.querySelector('.lista')
        lista.innerHTML="";

        
        if (json.Response == 'False') {
            alert('Nenhum filme encontrado')
        }

        json.Search.forEach(element => {
            // console.log(element)

            let item = document.createElement("div")
            item.classList.add("item")

            item.innerHTML = `<img src="${element.Poster}"/><h2>${element.Title}</h2>`;

            lista.appendChild(item);
        });
    }
    