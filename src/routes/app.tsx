import { ParentProps } from "solid-js";
import clientOnlyComponent from "~/util/clientOnlyComponent";

export default function (props:ParentProps){
    return <>
        {clientOnlyComponent(() => props.children)({})}
    </>
}
