import {getCategories} from "../api";

class NavigationService {
    getCategories(): any {
        return getCategories()
    }
}

export default new NavigationService()