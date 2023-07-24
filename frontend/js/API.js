const url = "http://localhost:4000/"

const get = async (type) => {
    try {
        const data = await fetch(`${url}${type}`);
        return data.json();
    } catch (error) {
        console.log(error);
    }
}

const getid = async (type, id) => {
    try {
        const data = await fetch(`${url}${type}/${id}`);
        return data.json();
    } catch (error) {
        console.log(error);
    }
}

const post = async (type, reg) => {
    try {
        const data = await fetch(`${url}${type}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reg)
        });
        return data.json();
    } catch (error) {
        console.log(error);
    }
}

const del = async (type, id) => {
    try {
        const data = await fetch(`${url}${type}/${id}`, {
            method: "DELETE"
        });
        return data.json();
    } catch (error) {
        console.log(error);
    }
}

const put = async (type, id, data) => {
    try {
        const data = await fetch(`${url}${type}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return data.json();
    } catch (error) {
        console.log(error);
    }
}

export {
    get, post, del, put, getid
}