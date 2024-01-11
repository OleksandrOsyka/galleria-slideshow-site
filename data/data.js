import data from "./data.json";

export function getThumbnails() {
    return data.map((item) => {
        return {
            name: item.name,
            artist: item.artist.name,
            image: item.images.thumbnail,
            height: item.images.height,
            id: item.id,
        }
    })
}

export function getAllIds() {
    return data.map((item) => {
        return item.id.toString();
    });
}

export function getSlideById(id) {
    return data.find(function(item) {
        return item.id.toString() === id;
    })
}