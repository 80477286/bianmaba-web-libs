import { OperationResult } from "./OperationResult";
export interface QueryResult extends OperationResult {
    page?: number;
    size?: number;
    total?: number;
}
