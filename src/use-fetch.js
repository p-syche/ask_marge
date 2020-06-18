const useCustomFetch = messageReadyToSend => {
  const CLIENT_TOKEN = 'YQKUWRTVDAGSCNGN46L3QFVD7EQJYQF2';
  const uri = 'https://api.wit.ai/message?v=20200513&q=' + messageReadyToSend;
  const auth = 'Bearer ' + CLIENT_TOKEN;
  const [data, setData] = useState({});
  const [url, setUrl] = useState(
    'https://api.wit.ai/message?v=20200513&q=' + uri,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
 
      try {
        const result = await axios(url);
 
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
 
      setIsLoading(false);
    };
 
    fetchData();
  }, [url]);
 
  return [{ data, isLoading, isError }, setUrl];
}
