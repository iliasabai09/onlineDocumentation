import {getItemById, updateItem} from "../../../shared/api/firebase.ts";
import type {IDetail} from "../interfaces";

export function getDetailById(id: string): any {
    return getItemById(id)
}

export function updateDetailById(id: string, data: IDetail) {
    return updateItem(id, data)
}