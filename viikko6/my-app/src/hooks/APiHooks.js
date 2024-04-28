// TODO: add necessary imports
const useMedia = () => {
    const {getUserById} = useUser();

    // TODO: move mediaArray state here
    const [selectedItem, setSelectedItem] = useState(null);

  const getMedia = async () => {
    const mediaResult = await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media',
    );

    const mediaWithUser = await Promise.all(
      mediaResult.map(async (mediaItem) => {
        const userResult = useUser().getUserById(mediaItem.user_id);
        return {...mediaItem, username: userResult.username};
      }),
    );

    console.log(mediaWithUser);

    setMediaArray(mediaWithUser);
  };
  // TODO: move useEffect here
  useEffect(() => {
    getMedia();
  }, []);

  console.log(mediaArray);

}

const useUser = () => {
    const getUserById = async(id) => { 
        const userResult = await fetchData(
            import.meta.env.VITE_AUTH_API + '/users/' + id,
        );
        return userResult;
    }

}
export {useMedia};  