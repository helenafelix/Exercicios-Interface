import Notificacao from "./Notificacao"

export default class SMS implements Notificacao {
    enviar(mensagem: string): void{
        console.log("SMS: "+mensagem)
    }
}
