import Http from "../utils/Http";
import { errorHandling } from '../utils/Error'

class FlavorInstance {

    async getAll() {
        try {
            let response = await Http.get(`/flavors`);
            return response;
        } catch (e) {
            errorHandling(e)
        }
    }

}

export default new FlavorInstance();