let navBar = document.querySelector('#navBar')
let orologio = document.querySelector('#oroglogio')

let recensioni = [
    {nome : 'Daniele' , descrizione: 'bel sito ma troppo caro' , rank : '3'},
    {nome : 'Franco ' , descrizione: 'bel sito lo consigliero sicuramente' , rank : '5'},
    {nome : 'Peppa' , descrizione: 'Gli articoli non sono mai arrivati' , rank : '1'},
    {nome : 'Gianni' , descrizione: 'tempi di spedizione brevissimi' , rank : '4'},
    {nome : 'Cristina' , descrizione: ' tutto in regola' , rank : '3'},
    
]


console.dir(navBar)

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
    let ora = new Date(); // Use `const` for better practice
    let ore = ora.getHours().toString().padStart(2, '0'); // Ensure string format
    let minuti = ora.getMinutes().toString().padStart(2, '0');
    let secondi = ora.getSeconds().toString().padStart(2, '0');
    document.getElementById('orologio').textContent = `${ore}:${minuti}:${secondi}`;
}

aggiornaOra();
setInterval(aggiornaOra, 1000);





let wrapperReviuw = document.querySelector('.swiper-wrapper')

recensioni.forEach((recensione ) => {
    let div = document.createElement('div')
    div.classList.add('swiper-slide')
    div.innerHTML = `
    
   
      <div class="card-reviuw">
        <p > ${recensione.nome}</p>
        <p > ${recensione.descrizione}</p>
       <div class="d-flex justify-content-center star">
    
       </div>
       </div>
    
    
    
    
    `

// wrapperReviuw.innerHTML= '';
 wrapperReviuw.appendChild(div)
//  console.log(recensione);
});



let stars = document.querySelectorAll('.star')

stars.forEach((star , index ) => {
    for (let i = 1; i <= recensioni[index].rank ; i++ ) {
        let icon = document.createElement('i')
        icon.classList.add('fa-solid', 'fa-star')
        
        star.appendChild(icon)
        
    }
    let differnce = 5 - recensioni[index].rank ;
    for (let i = 1; i <= differnce ; i++ ) {
        let icon = document.createElement('i')
        icon.classList.add('fa-regular', 'fa-star')
        
        star.appendChild(icon)
        
    }
    
});
    

const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    
  });
    


   