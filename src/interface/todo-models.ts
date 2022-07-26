export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
    location: "unStarted" | "inProgress" | "todo" | "completed";
    storyPoint: number | undefined;
    technology: string;
    // technology?: "React" | "NodeJs" | "GraphQl" | "TypeScript" | "Material UI" | "Angular"
    type: string ;
}