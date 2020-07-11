import * as React from "react";
import {Suspense} from "react";
import Preloader from "../components/Common/Preloader";


export const withSuspense = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </Suspense>
        )
    }
};