function inizializzaSelection()
{
    var btn = document.getElementsByClassName("bottone");
    var i;
    
    for (i = 0; i < btn.length; i++) 
    {
        btn[i].addEventListener("click", // una volta cliccato il bottone eseguo la funzione
            function() 
            {
                this.classList.toggle("active"); // richiamo la classe active che cambia il simbolo da '+' a '-'
    
                var content = this.nextElementSibling; // prende l'elemento successivo a quello puntato della stessa lista
                if (content.style.maxHeight) // maxHeight corrispone all'altezza massima di un elemento nel div
                                             // se maxHeight contiene il valore dell'altezza lo imposto a null altrimenti imposto l'altezza max
                {
                    content.style.maxHeight = null; // imposto l'altezza a null
                } 
                else 
                {
                    content.style.maxHeight = content.scrollHeight + "px"; // scrollHeight corrisponde al valore minimo che l'elemento richiede per essere visualizzato senza scroll bar
                } 
            });
    }
    
    var btn = document.getElementsByClassName("bottone2");
    var i;
    
    for (i = 0; i < btn.length; i++) 
    {
        btn[i].addEventListener("click", // una volta cliccato il bottone eseguo la funzione
            function() 
            {
                this.classList.toggle("active"); // richiamo la classe active che cambia il simbolo da '+' a '-'
    
                var content = this.nextElementSibling; // prende l'elemento successivo a quello puntato della stessa lista
                if (content.style.maxHeight) // maxHeight corrispone all'altezza massima di un elemento nel div
                                             // se maxHeight contiene il valore dell'altezza lo imposto a null altrimenti imposto l'altezza max
                {
                    content.style.maxHeight = null; // imposto l'altezza a null
                } 
                else 
                {
                    content.style.maxHeight = content.scrollHeight + "px"; // scrollHeight corrisponde al valore minimo che l'elemento richiede per essere visualizzato senza scroll bar
                } 
            });
    }
}
