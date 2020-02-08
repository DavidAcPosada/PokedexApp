import { useEffect, useState } from "react";
import Axios from "axios";

// Hook for infinite scroll
export default function useListPokemon(pageNumber) {
  const [loading, setLoading] = useState(true) // Loading flag
  const [error, setError] = useState(false) // Error flag
  const [results, setResults] = useState([]) // Results of callback
  const [hasMore, setHasMore] = useState(true) // If exist more results after call the api endpoint

  useEffect(() => {
    setLoading(true)
    setError(false)

    let cancel
    Axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/',
      params: { offset: pageNumber, limit: 20 }, // Dynamic params for the api
      cancelToken: new Axios.CancelToken(c => cancel = c) // Control the errors of multiple calls if the query fails
    }).then(res => {
      setLoading(false)
      setResults(prevResults => {
        return [...new Set([...prevResults, ...res.data.results.map(element => element)])] // Combine prevents values of results and add new values
      })
      setHasMore(res.data.results.length > 0)
    }).catch(err => {
      if(Axios.isCancel(err)) return
      setError(true)
    })
    return () => cancel()
  }, [pageNumber]) // Watch if pageNumber change for dispatch the useEffect

  return { loading, error, results, hasMore }
}