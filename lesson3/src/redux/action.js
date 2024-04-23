export function addUserAction(user){
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    return async function () {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
    }
}