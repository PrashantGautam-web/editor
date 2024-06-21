import { useState } from "react"
import { templatesData } from "./TemplatesData"
import { useNavigate } from "react-router-dom"

const Templates = () => {
    const navigate = useNavigate()
    const [templates, setTemplates] = useState(templatesData)
    console.log(templates)
    const getTemplates = () => {
        return (
            <>
                <h1>Templates</h1>
                <div style={{ display: "flex" }} >
                    <div style={{ height: "600px", width: "350px", alignContent: "center" }}>
                        <h1 style={{ width: "350px" }} onClick={() => { navigate(`/edit-template`) }}>Create New Template</h1>
                    </div>
                    {templates.map((item, index) => {
                        return (
                            <div style={{ width: "350px", height: "600px", margin: "10px" }} onClick={() => { navigate(`/edit-template?id=${index}`) }}>
                                <h1>{index}</h1>
                                <img src={item.image} height={"480px"} width={"350px"} />
                            </div>
                        )
                    })}
                </div>


            </>
        )
    }
    return getTemplates()
}
export default Templates