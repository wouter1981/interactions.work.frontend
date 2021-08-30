using System;

namespace frontend
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary
        {
            get
            {
                switch (TemperatureC)
                {
                    case int n when (n >= 30):
                        return "Hot";
                    case int n when (20 <= n && n < 30):
                        return "Nice";
                    case int n when (10 <= n && n < 20):
                        return "Chilly";
                    case int n when (0 <= n && n < 10):
                        return "Cold";
                    case int n when (n < 0):
                        return "Freezing";
                    default:
                        return "How is this possible?";
                }
            }
        }
    }
}
