import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk"
//import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas"

const config=defineConfig({

    projectId:"akkf849a",
    dataset:"production",
    title:"my personal website",
    apiVersion:"2023-07-15",
    basePath:"/admin",
    plugins:[deskTool()],
    schema: {types:schemas}
})

export default config;