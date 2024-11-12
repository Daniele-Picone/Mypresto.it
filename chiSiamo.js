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