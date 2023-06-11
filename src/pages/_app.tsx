import type { AppProps } from "next/app";
import { TodoProvider } from "providers/TodoProvider";
import "styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}
