import axios from "axios";

export const getRecipes = async () => {
    return axios.get("http://localhost:8081/recipes")
}
