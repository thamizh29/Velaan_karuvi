import InputElement from "../../inputs/input"
export default function Have(){
    return(
        <div>
            <ul>
                <li><p>Name</p><InputElement type={"name"} name={"Name"} placeholder={"Enter the Name"}/></li>
                <li><p>Mobile</p><InputElement type={"mobile"} name={"Mobile"} placeholder={"Enter the Mobile"}/></li>
            </ul>
        </div>
    )
}