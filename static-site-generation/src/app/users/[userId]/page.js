import getData from "../../../../service/getdata"


export default async function userId(props) {
    const response = await getData();
    //    console.log(response)
    const currentid = props.params.userId;
    const data = response[currentid - 1];
   // console.log(data)
    return (
        <div>
            <h1> User Id Page</h1>
            <>
                <h1> Id : {data.id}</h1>
                <h2> Name: {data.name}</h2>
                <p> email : {data.email}</p>
                <h3> Username : {data.username}</h3>
                <h4> Address : {data.address.city}</h4>
                <h5> Zip Code : {data.address.zipcode}</h5>
            </>
        </div>
    )
}

export async function generateStaticParams() {
    const response = await getData();
    const users = await response;
    return users.map(user => ({
        userId: user.id.toString(),
    }))
}