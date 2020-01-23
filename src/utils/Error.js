import HttpStatus from 'http-status-codes'
import Message from '../utils/Message'

export function errorHandling(e) {
    if (!e.response) {
        Message.showError("Ops...", "Tivemos um problema no servidor", e);
    } else if (e.response.status !== HttpStatus.OK && e.response.status !== HttpStatus.INTERNAL_SERVER_ERROR) {
        Message.showInfo("Ops...", e.response.data.message || "Tivemos um problema no servidor", e);
    } else if (e.response.status === HttpStatus.INTERNAL_SERVER_ERROR || e.response.status === HttpStatus.NOT_FOUND) {
        Message.showError("Ops...", e.response.data.error || "Rota não encontrada", e);
    }
}