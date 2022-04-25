const apiData = {
    url: 'https://pokeapi.co/docs/v2/',
    type: 'pokemo',
    id: '25',
}
const apiUrl = '$(apiData.url)$(apiData.type)$(apiData.id)';


fetch(apiUrl)
      .then( (data) => data.json())
      .then( (pokemon) => console.log(pokemon) )

      const generateHtml = (data) => {
          console.log(data)
              }