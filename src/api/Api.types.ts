export interface ApiResponse<Data> {
    name: string;
    code: number;
    message: string; // this corresponds
    devMessage: string;
    data: Data;
}
