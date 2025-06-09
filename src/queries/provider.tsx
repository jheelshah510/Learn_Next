import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

interface PropType {
    children: React.ReactNode;
}

export default function AppQueryClientProvider(props:PropType){
    return (
        <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    )
}