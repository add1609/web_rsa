import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({Component, pageProps}) {

	return (
		<Layout>
			<Head>
				<title>webRSA</title>
				<meta charSet="UTF-8"/>
				<meta name="author" content="Ahmed Sami"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;