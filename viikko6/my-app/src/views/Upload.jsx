import { useState } from "react"
import { Link } from "react-router-dom"
import {useMedia, useFile} from '../hooks/APiHooks';

//const baseApiUrl = "http://127.0.0.1:3000"


const Upload = () => {
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({ title: '', description: '' });
  const { postFile } = useFile();
  const { postMedia } = useMedia();
  const token = localStorage.getItem('token');

  const doUpload = async () => {
    try {
        const uploadResult = await postFile(file, token);
        console.log('doUpload', uploadResult);

        const postMediaResult = await postMedia(uploadResult, inputs, token);
        console.log('post media result', postMediaResult);

        navigate('/');
    } catch (error) {
        console.error(error.message);
    }
};


  const handleInputChange = (event) => {

    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Estä lomakkeen oletuslähetyksen
    setApiResult(null);
  
    // Luodaan FormData ja lisätään siihen tiedot
    const formData = new FormData();
    const [apiResult, setApiResult] = useState(null);

    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    formData.append("thumbnail", file);

    // Lähetetään FormData POST-pyynnöllä
    const response = await fetch(``, {
      method: "post",
      body: formData
    });

    // Käsitellään vastaus
    const result = await response.json();
    console.log("result", result);
    setApiResult(result);
  }
  
  return (
    <>
      <h1>Upload</h1>
  
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            value={inputs.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            value={inputs.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="thumbnail"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://via.placeholder.com/200?text=Choose+image'
          }
          alt="preview"
          width="200"
        />
        <button
          type="submit"
          disabled={!(file && inputs.title.length > 3)}
        >
          Upload
        </button>
      </form>
      <p className="mt-12">
      <Link to="/">Back to home</Link>
    </p>

    </>
  );
};

export default Upload;
