import React from 'react'

type DataFetchProps = {
    status: "success" | "error" | "loading";
};

const DataFatch = ({status}:DataFetchProps) => {
    if(status === "loading"){
        return (
            <div>        
                <h3>Data loading ..</h3>
            </div>
        )
    }else if(status == "error"){
        return (
            <div>
                <h3>Error: Data could not fetch</h3>
            </div>
        )
    }else{
        return (
            <div>                
                <h3>Data fetch Successfully</h3>
            </div>
        )
    }
  
}

export default DataFatch