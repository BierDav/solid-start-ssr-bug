import { MetaProvider, Title } from "@solidjs/meta";
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "~/app.css";

export default function App() {
    return (
        <Router
            root={props => (
                <MetaProvider>
                    <Title>SolidStart - Basic</Title>
                    <A href="/app">Go to App</A>
                    <Suspense>{props.children}</Suspense>
                </MetaProvider>
            )}
        >
            <FileRoutes/>
        </Router>
    );
}
