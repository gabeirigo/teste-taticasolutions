import { store } from 'react-notifications-component';

class Message {

    showSuccess(title, message) {
        return this.configMessage(title, message, "success");
    }

    showWarning(title, message) {
        return this.configMessage(title, message, "warning");
    }

    showInfo(title, message) {
        return this.configMessage(title, message, "info");
    }

    showError(title, message, exception = null) {
        if(exception) {
            console.log("--------------------------------------------------");
            console.log(exception)
            console.log("-------------------------------------------------");
        }
        return this.configMessage(title, message, "danger");
    }

    configMessage(title, message, severity) {
        store.addNotification({
            title: title,
            message: message,
            type: severity,
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            width: 400,
            dismiss: { duration: 5000, onScreen: true }
          });
    }
}

export default new Message();
