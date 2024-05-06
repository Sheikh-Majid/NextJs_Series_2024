
export default async function getData() {
    
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    return data.json();
}
