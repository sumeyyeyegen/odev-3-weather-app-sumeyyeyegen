import React, { useContext } from 'react'
import ForecastContext from '../contexts/ForecastContext'
import WeatherCard from './WeatherCard'
import styles from '../App.css'

const WeatherList = () => {
    const { data } = useContext(ForecastContext);
    if (data.length === 0) {
        return <p>Loading</p>
    }
    return (
        <div className="list" style={styles.list}>
            <div className="row">
                {
                    data.length && data?.map((d, i) =>
                        <div className="col" key={i} >
                            {console.log(data)}
                            {console.log(d.weather)}
                            <WeatherCard
                                temp={d.temp}
                                maxTemp={d.max_temp}
                                minTemp={d.min_temp}
                                datetime={d.datetime}
                                weather={d.weather}
                                day=""
                            />
                        </div>
                    )}
            </div >
        </div>
    )

}

export default WeatherList;