
import {Link} from "react-router-dom";


const Upload = () => {

    const [file, setFile] = useState("");
    const [filename, setFilename] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log ("Tieto yritetään lähettää");
        console.log("name", filename);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" name="tiedosto" onChange={(event)=> setFile(event.target.value)}/>
                <br/ >
                <label htmlFor="name">Name</label>
                <input type="text"id="name" name="name" onChange={(event)=>
                setFilename(event.target.value)
                }/>
                <button type="submit">Upload</button>
            </form>

            <p> 
                <Link to ="/upload">Upload</Link>
            </p>
        </>
    );
     
}

export default Upload;