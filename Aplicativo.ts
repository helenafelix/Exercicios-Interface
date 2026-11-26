import Notificacao from "./Notificacao"

export default class Aplicativo implements Notificacao {
    enviar(mensagem: string): void{
        console.log("Notificação no aplicativo: "+mensagem)
    }
}
