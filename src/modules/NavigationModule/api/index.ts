import {getItems} from "../../../shared/api/firebase.ts";

export function getCategories() {
    return getItems()
}