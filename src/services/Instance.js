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

    async save(instance) {
        try {
            let response = await Http.post(`/instances`, instance);
            return response;
        } catch (e) {
            errorHandling(e)
        }
    }

    async delete(instance) {
        try {
            let response = await Http.delete(`/instances/${instance.id}`);
            return response;
        } catch (e) {
            errorHandling(e)
        }
    }

}

export default new InstanceService();