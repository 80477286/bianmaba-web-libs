export default interface OperationResult {
    success: boolean;
    result?: string,
    data?: Array<any> | Object;
    errors?: Array<any>;
    messages?: Array<any>;
    extendedData?: any;
    status?: any;
    exception?: any;
}