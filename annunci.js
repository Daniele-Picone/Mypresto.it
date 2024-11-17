let navBar = document.querySelector('#navBar')
let orologio = document.querySelector('#oroglogio')
let menuBtn = document.querySelector('#menu')
let sidebar = document.querySelector('.sidebar')
let cardWrapper = document.querySelector('#cardsWrapper')
let radioWrapper= document.querySelector('#radioWrapper');
console.dir(navBar)

console.dir(sidebar)

window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    if(scrolled > 0){
      
        navBar.style.marginTop = '-85px';
        navBar.style.zIndex= '2';
    }else{
        navBar.style.marginTop = '0px';
    }
})

function aggiornaOra() {
    let ora = new Date(); 
    let ore = ora.getHours().toString().padStart(2, '0'); 
    let minuti = ora.getMinutes().toString().padStart(2, '0');
    let secondi = ora.getSeconds().toString().padStart(2, '0');
    document.getElementById('orologio').textContent = `${ore}:${minuti}:${secondi}`;
}
  
  aggiornaOra();
  setInterval(aggiornaOra, 1000);


  menuBtn.addEventListener('click', ()=> { 
       
            sidebar.classList.toggle('nodisplay')
        cardWrapper.style.width = '100%'
        
        
  })

  fetch('./annunci.json').then((response)=> response.json()).then( (data)=> {
   console.log(data);
   data.sort((a, b) => a.price - b.price )
   
   function radioCreat(){
       let categories = data.map((annuncio) => annuncio.category)
       let unicaCategoria= Array.from(new Set(categories))
       unicaCategoria.forEach((category) =>{
           let div = document.createElement('div')
           div.innerHTML=`
           <span > <input class=" form-check-input" type="radio" name="categories" id="${category}">
           <label class="form-check-label" for="${category}">
           ${ category }
           </label> </span>
           
           
           `
           radioWrapper.appendChild(div)
        })
        
        
        
        
    }
    radioCreat()
    
   function showCards(arrey) {
    cardWrapper.innerHTML= ''
     arrey.forEach(annuncio => {
   

        let div = document.createElement('div')
        div.classList.add('cards')
        div.innerHTML=
            `
            <img src="https://picsum.photos/240/100" alt="">
            <h4>${annuncio.name}</h4>
            <p> ${annuncio.category}</p>
            <p> ${annuncio.price}  $ </p>
            <button id="addMarket"> aggiungi al carrello</button>
            
            `
        cardWrapper.appendChild(div)
   })

    } 
    showCards(data)
    let radioBtn = document.querySelectorAll('.form-check-input')
    function filterCategory(array) {
       
        let categoria = Array.from(radioBtn).find((button) => button.checked).id;
        
        console.log(categoria);
        
        if( categoria != 'all' ){
      
            let filtered = array.filter((annuncio)=> annuncio.category == categoria)
            console.log(filtered);
            
            return filtered
        }else{
          return array
        }
      };

      radioBtn.forEach((button) =>{

        button.addEventListener('click', ()=>{
    
          setPriceInput()
          goblalFilter()
         
    
        });
    });

      

      let priceInput = document.querySelector('#priceInput')
      let priceValue = document.querySelector('#priceValue')
    function setPriceInput() {
      
        let prices = filterCategory(data).map((annuncio) => annuncio.price)
        prices.sort((a,b) => a - b)
        let maxPrice = Math.ceil(prices.pop());
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceValue.innerHTML = maxPrice
            
        
    }
    
    setPriceInput()
    priceInput.addEventListener('input' , () => {
        priceValue.innerHTML= priceInput.value
    })
    function filterByPrice(arrey) {
        let filter = arrey.filter( (annuncio) => +annuncio.price <= priceInput.value )
        return filter
        
      }
      
      priceInput.addEventListener('input', ()=>{
          priceValue.innerHTML = priceInput.value
         goblalFilter()
      })
      
      let wordInput = document.querySelector('#wordInput')
function filterByWord(array) {
    let filter = array.filter((annuncio) => annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()) )

    return filter
}

wordInput.addEventListener('input' , () =>{
   goblalFilter()
})
function goblalFilter() {
    let filterByCategory= filterCategory(data)
     let filterPrice =filterByPrice(filterByCategory)
     let filterWord = filterByWord(filterPrice)
   
    showCards(filterWord)
   }
    
   let addMarket = document.querySelectorAll('#addMarket')
   let carrello = document.querySelector('#carrello')
   
   
console.dir(addMarket[0])
   addMarket.forEach((button)=> {
    button.addEventListener('click' , ()=> {
        
            let currentCount = parseInt(carrello.dataset.count) || 0; 
        currentCount++
       carrello.dataset.count = currentCount
       button.innerText = 'rimuvi dal carrello'
      
    
    })
   })
     
    });
   
