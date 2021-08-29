import * as React from "react";
import { Auth0Context } from "@auth0/auth0-react";
import Axios from "axios";

type WeatherForecastProps = {

};

type WeatherForecastState = {
    loading: boolean,
    userHasAccess: boolean,
    forecast: WeatherForecastItem[],
};

type WeatherForecastItem = {
    date: string,
    temperatureC: number,
    temperatureF: number,
    summary: string,
}

export default class WeatherForecast extends React.Component<WeatherForecastProps, WeatherForecastState> {
    state: WeatherForecastState = {
        loading: false,
        userHasAccess: true,
        forecast: [],
    };

    static contextType = Auth0Context;

    async load() {
        try {
            this.state.loading = true;
            const { getAccessTokenSilently } = this.context;
            const token = await getAccessTokenSilently();
            Axios
                .get("https://localhost:5001/api/weatherforecast", {
                    headers: { Authorization: `Bearer ${token}` }
                })
                .then(response => {
                    this.setState({ loading: false, forecast: response.data });
                })
                .catch(error =>
                    this.setState({ loading: false, userHasAccess: false })
                );

        } catch (error) {
            this.setState({ loading: false, forecast: [], userHasAccess: false });
        }
    }

    render() {
        const loading = this.state.loading;
        const forecast = this.state.forecast;
        const userHasAccess = this.state.userHasAccess;
        if (!loading && (!forecast || forecast.length === 0) && userHasAccess) {
            this.load(); // Async will update
        }
        return (
            <div className="forecast">
                {loading && <p>Loading...</p>}
                {!loading && userHasAccess && <div>{
                    forecast.map(item => <p>{
                        new Date(item.date).toLocaleString("nl-NL") + " | " +
                        item.summary + " | " +
                        item.temperatureC + "\u2103 | " +
                        item.temperatureF + "\u2109"
                    }</p>)
                }</div>}
                {!userHasAccess && <p>You do not have access to the weather module.</p>}
            </div>
        );
    }
}
function WeatherForecast2() {

}