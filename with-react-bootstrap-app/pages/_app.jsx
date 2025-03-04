import {QueryClient,QueryClientProvider} from "react-query";
import "bootstrap/dist/css/bootstrap.min.css"
import "../style/index.css";
import Layout from '../components/layout'
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
    console.log("Component:", Component); // Debugging log
  
    if (!Component) {
      return <h1>Error: Component is undefined</h1>; // Display an error if undefined
    }
  
    return (
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    );
  }
  