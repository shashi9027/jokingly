import JokesCard from "@/components/jokes-card";
import axios from "axios";

export default async function Info() {
    const response =  await axios({
        method: 'get', // or 'post', 'put', 'delete', etc.
        url: 'https://world-of-jokes1.p.rapidapi.com/v1/jokes/joke-of-the-day',
        headers: {
            'X-RapidAPI-Key': 'c5984c5d3dmshe0a7047bea91414p1e0d2cjsndeca1e48648d',
            'X-RapidAPI-Host': 'world-of-jokes1.p.rapidapi.com'
        },
      }); // Replace with your API endpoint
      const data = response.data;
      

    return (
        <div >
            <div className="display-center" style={{ marginTop: "150px" }}>
                <div>
                <div className="main-heading display-center">
                    Joke of the Day
                </div>
                <div className="display-center" style={{marginTop: "20px"}}>
                   <JokesCard data={data}/>
                </div>
                </div>
            </div>
        </div>

    )
}