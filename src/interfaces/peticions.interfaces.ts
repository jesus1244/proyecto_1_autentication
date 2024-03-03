export interface queryI {
    key: string
    value: string
}
export interface bodyQuery {
    body: any;
    query: Array<queryI>
}
