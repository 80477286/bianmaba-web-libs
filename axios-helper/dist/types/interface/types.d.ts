import QueryResult from "./QueryResult";
import OperationResult from "./OperationResult";
import GlobalOptions from "./GlobalOptions";
import Executor from "../executors/Executor";
import GetExecutor from "../executors/GetExecutor";
import PostExecutor from "../executors/PostExecutor";
export type Result = (QueryResult | OperationResult | any | null);
export type DefaultGlobalOptions = GlobalOptions | any;
export type ExecutorType = (Executor | GetExecutor | PostExecutor | any);
