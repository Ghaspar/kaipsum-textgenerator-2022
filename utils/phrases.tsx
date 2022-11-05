const phrases = [
    "negativo", 
	"eu não", 
	"você que é", 
	"kid bengala", 
	"ah sim claro",
	"vai toma no glub",
	"eu hein kkk",
	"oxi",
	"assim",
	"tipo assim",
	"tipo",
	"o meu amor",
	"tava demorandooooo",
	"Vitão vai atiçar minha cobra",
	"me mata logo vai",
	"é só por isso mesmo, entendeu?",
	"essas coisas tudo",
	"andar não, vamos de uber",
	"vocês já comeram?",
	"acho que vou pedir um bk",
	"vou comprar monster",
	"vou ligar pro Gio pra saber onde ele tá",
	"oh puta, cade você?",
	"o Kris vai vir",
	"vocês vão pedir comida?",
	"pior que não comi nada antes de vir",
	"vou só tomar um banho e já vou",
	"alguém afim de jogar magica hoje?",
	"imagina o sal ...",
	"não, pera...",
	"não, não, não... não vou atacar ninguem",
	"tipo assim, vai virar um jogo de comadre",
	"tipo assim, sério...",
	"ta, ta, ta, ta, ta...",
	"eu sei... eu sei... eu sei amore",
	"devidamente",
	"saudades do sr",
	"no meio do glub dele",
	"eu sei amore",
	"perfume de feromônio",
	"umas 20 no dia",
    "ta, eu sei",
]


function capitalizeFirstLetter(getLetter:string) {
    return getLetter.charAt(0).toUpperCase() + getLetter.slice(1);
}

function geneteraParagraph(getData:any){
    const limit = 425;
    let paragraph = "";
    for (let i = 0; i < limit; i++) {
        paragraph += getData[Math.floor(Math.random() * getData.length) + 1]+" ";
    } 
    return paragraph;
}

export default function GetPhrases() {
    const maxPhrases = Math.floor(Math.random() * phrases.length) + 1
    const title = capitalizeFirstLetter(phrases[maxPhrases])
    const paragraph = geneteraParagraph(phrases)
    return {
        'title': title,
        'paragraph':paragraph
    }
}