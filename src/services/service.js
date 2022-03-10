export const getData = async () => {
    try {
        return await fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
    }
    catch (error) {
        console.log(error);
        return error;
    }

}