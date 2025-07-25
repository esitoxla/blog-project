import React from "react";
import { useNavigate, useRouteError } from "react-router";
import {Link} from "react-router"

export default function NotFoundPage() {
  
    const error = useRouteError();
    

    return (
      <div className="flex flex-col justify-center items-center h-[100vh] bg-blue-100">
        {/* <h3>{error.statusText}</h3>
                    <p>{error.error.message || 'Undefined error'}</p> */}

        <h3>Error!</h3>
        <p className="text-red-500">Something went wrong</p>

        <p onClick={() => useNavigate("/", { replace: true })}></p>
        <p>
          You can go back to the homepage by clicking{" "}
          <Link to="/" className="text-blue-800 underline">
            Here
          </Link>
        </p>
      </div>
    );
  };

