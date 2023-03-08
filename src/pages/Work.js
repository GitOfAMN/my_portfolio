import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Work(props){
    const apiKey = '73986794-0DAE-46B5-8335-3E1125402C8A'
    const params = useParams()
    const symbol = params.symbol 

    const [coin, setCoin] = useState(null)

    const getCoin = async () => {
        try {
            const response = await fetch(`https://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`)
            const data = await response.json()
            setCoin(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCoin()
    }, [])

    return(
        <>
        {
            coin && coin.rate ? (
                <div>
                    <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                    <h2>{coin.rate}</h2>
                </div>
            ) : <h1>Waiting on Server </h1>
        }
       </>
    )
}