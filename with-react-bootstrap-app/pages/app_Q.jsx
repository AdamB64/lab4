import {QueryClient,QueryClientProvider} from "react-query";
//import "bootstrap/dist/css/bootstrap.min.css"
import "../style/index.css";
import Layout from '../components/layout'
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
 return (
<QueryClientProvider client={queryClient}>
 <Layout>
 <Component {...pageProps} />
 </Layout>
</QueryClientProvider>
 )
}
