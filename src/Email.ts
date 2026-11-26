import Notificacao from "./Notificacao"

export default class Email implements Notificacao {
    enviar(mensagem: string): void{
        console.log("E-mail: "+mensagem)
    }
}
