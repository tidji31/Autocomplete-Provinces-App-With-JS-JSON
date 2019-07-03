const search = document.getElementById('search');
const mtl = document.getElementById('match-list');

// search wilayas.json and filter it 
const searchStates = async searchText => {
const res = await fetch('./json/wilayas.json');
const wilayas = await res.json();

    //get matches to the current text input
    let matches = wilayas.filter(wilaya => {
    const regex = new RegExp(`^${searchText}`,'gi');
    return wilaya.nom.match(regex) || wilaya.code.match(regex) ;
                                          });

if (searchText == 0){
                            matches = 0;
                            mtl.innerHTML = '';
                            }else {
                            printHTML(matches);
                                   }

                                          

                                          };
// show results in HTML
const printHTML = matches => {
                             
                            if(matches.lenght !== 0){
                                                    const html = matches.map(match => `<div class="card card-body mb-1"><h4> ${match.nom} <span class="badge badge-pill badge-Primary ml-4">${match.id} </span></h4></div>`).join('');
                                                  
                                                    mtl.innerHTML = html ;
                                                    }
                                };





search.addEventListener('input', () => searchStates(search.value) ) ;
