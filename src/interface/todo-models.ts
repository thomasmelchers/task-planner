export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
    location: "unStarted" | "inProgress" | "todo" | "completed";
}