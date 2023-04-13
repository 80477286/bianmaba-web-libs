import OperationResult from "./OperationResult";

export default interface QueryResult extends OperationResult {
    page?: number;
    size?: number;
    total?: number;
}