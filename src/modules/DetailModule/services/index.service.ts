import {getDetailById, updateDetailById} from "../api";
import type {IDetail} from "../interfaces";

class DetailService {
    getDetailById(id: string): any {
        return getDetailById(id)
    }

    updateDetailById(id: string, data: IDetail) {
        return updateDetailById(id, data)
    }
}

export default new DetailService();