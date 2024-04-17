import{useLocation} from 'react-router-dom';

const Single  = () => {
    const location = useLocation();
    const params = useParams();
    const {name, age} = useLocation;
    const navigate = useNavigate();

    console.log("location", location);
    console.log("Params", params);

    return 
       <>
       <h2 classaName="text-3xl"> ID: {params.id}</h2>

            <>
                <dialog
            
            </>
        </>
    
    };

