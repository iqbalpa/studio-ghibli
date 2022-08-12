import { BASE_URL } from "./config";

const API = {
    fetchAllFilms: () => {
        return fetch(`${BASE_URL}/films`)
            .then(res => res.json())
            .then(data => data);
    },
    fetchFilm: (filmId) => {
        return fetch(`${BASE_URL}/films/${filmId}`)
            .then(res => res.json())
            .then(data => data);
    },
    fetchAllPeople: () => {
        return fetch(`${BASE_URL}/people`)
            .then(res => res.json())
            .then(data => data);
    },
    fetchPerson: (personId) => {
        return fetch(`${BASE_URL}/people/${personId}`)
            .then(res => res.json())
            .then(data => data);
    }
}

export default API;