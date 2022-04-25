import axios from "axios";
const MENU_API_BASE_URL = "http://localhost:8091/api/v2/menus";

class MenuService {


    getMenu() {
        return axios.get(MENU_API_BASE_URL);
    }

    createMenu(menu) {
        return axios.post(MENU_API_BASE_URL, menu);
    }

    getMenuById(foodId) {
        return axios.get(MENU_API_BASE_URL + '/' + foodId);
    }

    updateMenu(menu, foodId) {
        return axios.put(MENU_API_BASE_URL + '/' + foodId, menu);
    }

    deleteMenu(foodId) {
        return axios.delete(MENU_API_BASE_URL + '/' + foodId);
    }

}

export default new MenuService()