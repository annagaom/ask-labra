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
//   TODO: move useEffect her
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

const useAuthentication = () => {
    const Login = async(inputs) => {
        const options = {
            method: 'POST',  
            Headers: {           
            'Content-Type': 'application/json',
            },
            body: JSON.stringify (inputs),
        };

        const loginResult = await fetchData(
            import.meta.env.VITE_AUTH_API + '/auth/login', 
            options,
        );
        
    };
    return loginResult;
}

   

export {useMedia};  