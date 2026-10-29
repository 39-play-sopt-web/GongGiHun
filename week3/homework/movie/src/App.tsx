import { useEffect } from "react";
import { getMovies } from "./apis/movie";


const App = () => {
    useEffect(() => {
        getMovies().then((data) => console.log(data));
    }, []);

    return <h1>hello</h1>;
}
export default App;
