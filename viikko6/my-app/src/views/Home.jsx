import { useEffect, useState } from 'react';
import MediaRow from '../components/MediaRow';
import { fetchData } from '../lib/fetchData';


const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const json = await fetchData('/~annagao/wsk1/hooks/test.json');
      setMediaArray(json);
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };

  console.log(mediaArray);
  useEffect(() => {
    getMedia();
  }, []);
  console.log(mediaArray);

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Owner</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              // setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
