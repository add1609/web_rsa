import {useEffect, useState} from "react";

function useFetchKey(url, uuid, shouldFetchKey, setShouldFetchKey) {
	const [keyData, setKeyData] = useState(null);
	const [keyLoading, setKeyLoading] = useState(false);
	const [keyError, setKeyError] = useState(null);
	const [keyTimeout, setKeyTimeout] = useState(false);

	useEffect(() => {
		if (shouldFetchKey) {
			setKeyLoading(true);
			setKeyTimeout(true);
			const myHeaders = new Headers();
			myHeaders.append("uuid", uuid.toString());
			const requestOptions = {
				method: "GET",
				headers: myHeaders,
				redirect: "follow"
			};
			fetch(url, requestOptions)
				.then(res => res.json())
				.then(d => {
					const parsedData = {
						len: d["length"],
						n: atob(d["public"]["n"]),
						e: atob(d["public"]["e"]),
						d: atob(d["private"]["d"]),
						p: atob(d["material"]["p"]),
						q: atob(d["material"]["q"]),
						theta: atob(d["material"]["theta"])
					};
					setKeyData(parsedData);
				})
				.catch(err => {
					setKeyError(err);
				})
				.finally(() => {
					setTimeout(() => setKeyTimeout(false), 5000);
					setKeyLoading(false);
					setShouldFetchKey(false);
				});
		}
	}, [url, uuid, shouldFetchKey, setShouldFetchKey]);

	return {keyData, keyLoading, keyTimeout};
}

export default useFetchKey;