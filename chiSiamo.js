let navBar = document.querySelector('#navBar')
let orologio = document.querySelector('#oroglogio')
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


  let staff_wrapper= document.querySelector('.staffs_section')
  
  let dipendenti = [
     
    { nome: 'Daniele' , ruolo: 'Presidente' , url:'./media/pinguino.jpg' , descrizione : 'IL Capo fondatore del sito... '},
    { nome: 'Filippo' , ruolo: 'Vice' , url:'./media/koala.jpg' , descrizione : 'ha fatto il suo... '},
    { nome: 'Cristaino', ruolo: 'Marketing' , url:'./media/gatto.jpg' , descrizione : 'Colui che non fa nulla... '},
    { nome: 'Gino' , ruolo: 'Influencer' , url:'./media/panda.jpg' , descrizione : ' Sta sempre col telefono in mano... '},
    { nome: 'Wisky' , ruolo: 'Mascote' , url:'./media/procione.jpg' , descrizione : 'l alcolizzato della porta accanto... '},
 ]

 dipendenti.forEach((dipendente)=> {
    let div = document.createElement('div')
    div.classList.add('staff')
    div.innerHTML=`
           <img src="${dipendente.url}" alt="">
           <p> ${dipendente.ruolo} </p> 
    
    `
    staff_wrapper.appendChild(div)

    
})

let dipendenteBtn = document.querySelectorAll('.staff')
let dipendenteWrapper = document.querySelector('#description_wrapper')

dipendenteBtn.forEach((btn, index) => {
    let dipendente = dipendenti[index]
        btn.addEventListener('click' , () => {
        
            let div = document.createElement('div');
            div.classList.add('description')
            div.innerHTML= `
            <img src="${dipendente.url}" alt="">
            <h3>${dipendente.nome }</h3>
            <h4>${dipendente.ruolo}</h4>
            <p>${ dipendente.descrizione}</p>
            
            
            `
            
            dipendenteWrapper.innerHTML = '';
            dipendenteWrapper.appendChild(div)
    
        
    })
})

