import {
    useQuery,
} from "@tanstack/react-query";
import useAuth from "./useAuth";


const useSelect = () => {
    const {user} = useAuth();
    const token = localStorage.getItem('access-token')
    const { refetch,data: select = []} = useQuery({
        queryKey: ['selects',user?.email,token],
        queryFn: async ()=>{
            if(!user || !token){
                return [];
            }
            const response = await fetch(`http://localhost:5000/selects?email=${user?.email}`,{
                headers:{
                    authorization : `bearer ${token}`
                }
            });
            return response.json();
        },
        

      })
    
      return [select,refetch];
};

export default useSelect;
