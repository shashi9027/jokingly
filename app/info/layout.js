// export async function getServerSideProps() {
//     // Fetch data from your API
//     try {
//       const response = await axios.get('https://world-of-jokes1.p.rapidapi.com/v1/jokes/categories'); // Replace with your API endpoint
//       const data = response.data;
  
//       // Pass the data as props to the component
//       return {
//         props: {
//           data,
//         },
//       };
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return {
//         props: {
//           data: null,
//         },
//       };
//     }
//   }
  
import { apiKey } from "@/utils/constant"
export default function Layout({children}){
    return(
        <>
        
        <div className="main-container">
            <div className="left-box">
             hlo
            </div>
            <div className="right-box">
               {children}
            </div>
            {console.log(apiKey)}
        </div>
        </>
    )
}