export interface IYadocProjectDefinition {
    name: string;
    summary: string;
    repository: string;
    docPath?: string;

    _id?: string;
    _owner?: string;
}

export interface IYadocDefinition {
    name: string;
    id: string;
    summary: string;
    projects: IYadocProjectDefinition[]
}