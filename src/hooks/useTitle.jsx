import { useEffect } from "react";


const useTitle = title => {
   useEffect(()=>{
    document.title =`Zoo Land | ${title}`
   },[title])
};

export default useTitle;