import Http from "../utils/Http";
import { errorHandling } from '../utils/Error'

class InstanceService {

    async getAll() {
        try {
            let response = await Http.get(`/instances`);
            return response;
        } catch (e) {
            errorHandling(e)
        }
    }

}

export default new InstanceService();