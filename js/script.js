// CONSEGNA:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            welcomeMessage: 'Questo messaggio è stato scritto con VueJs',
            welcomeImage: 'https://media.istockphoto.com/vectors/flag-ribbon-welcome-old-school-flag-banner-vector-id1223088904?k=20&m=1223088904&s=612x612&w=0&h=b_ilJpFTSQbZeCrZusHRLEskmfiONWH0hFASAJbgz9g='
        }
    }
)