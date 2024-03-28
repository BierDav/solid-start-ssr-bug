import { isServer } from "solid-js/web";

export default function (){
    if(isServer)
        throw new Error("This page is client only");
    return <>
        <h1>Hello World</h1>
    </>
}
