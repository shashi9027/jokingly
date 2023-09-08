import axios from "axios"
import CategoryList from "@/components/left_list"


export default async function Layout({ children }) {
    const response = await axios({
        method: 'get', // or 'post', 'put', 'delete', etc.
        url: 'https://world-of-jokes1.p.rapidapi.com/v1/jokes/categories',
        headers: {
            'X-RapidAPI-Key': 'c5984c5d3dmshe0a7047bea91414p1e0d2cjsndeca1e48648d',
            'X-RapidAPI-Host': 'world-of-jokes1.p.rapidapi.com'
        },
    }); // Replace with your API endpoint
    const data = response.data;
    return (
        <>
            <div className="header">
                Jokes Make Day Great
            </div>
            <div className="main-container">
                <CategoryList data={data} />
                <div className="right-box">
                    {children}
                </div>
            </div>
        </>
    )
}