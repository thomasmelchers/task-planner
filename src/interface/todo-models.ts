export interface Todo {
    id: number;
    todo: string | number;
    isDone: boolean;
    location: "unStarted" | "inProgress" | "todo" | "completed";
}