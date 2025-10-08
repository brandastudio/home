/* Anno automatico in footer */
document.addEventListener('DOMContentLoaded', () => {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
  
  /* Apertura singola dei details + comportamento “laterale” */
  (function(){
    const services = Array.from(document.querySelectorAll('.services-row .service'));
  
    // Chiudi tutti tranne quello selezionato
    function openExclusive(target){
      services.forEach(d => {
        if (d !== target) d.removeAttribute('open');
      });
    }
  
    services.forEach(d => {
      // Apri/chiudi in modo esclusivo quando l'utente interagisce
      d.addEventListener('toggle', () => {
        if (d.open) openExclusive(d);
      });
  
      // Migliora il click: apri/chiudi quando si clicca sul summary
      const summary = d.querySelector('summary.service-btn');
      if (summary){
        summary.addEventListener('click', (ev) => {
          // Lasciamo che <details> gestisca l’apertura, ma blocchiamo selezioni di testo accidentali
          ev.preventDefault();
          const willOpen = !d.open;
          if (willOpen){
            openExclusive(d);
            d.setAttribute('open', '');
          } else {
            d.removeAttribute('open');
          }
        });
      }
    });
  })();
  