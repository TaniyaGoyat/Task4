import "./infoBox.css";
import Card from '@mui/material/Card';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL="https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Slo8PLbmJmONDCBRazEkAwLj1LEqLb8AGmG82uyW0uI=";
    const COLD_URL="https://media.istockphoto.com/id/863513024/photo/winter-scene-snowfall-on-the-blurred-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=KpFy42xwYXEqSvKwcwbK_B8iACshiCo6bgl4IzppBKo=";
    const RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
    return(
        <div className="InfoBox">
           <h2>WeatherInfo</h2>
           <Card sx={{ maxWidth: 345 }} className="cardic">
                <CardMedia
                    component="img"
                    alt="weather image"
                    height="140"
                    image={info.humidity>80?RAIN_URL :info.temp>15 ?HOT_URL :COLD_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">

                        {info.city} {info.humidity>80?<ThunderstormIcon/> :info.temp>15 ?<WbSunnyIcon/> :<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Temperature:</strong> {info.temp}°C<br />
                        <strong>Feels Like:</strong> {info.feelsLike}°C<br />
                        <strong>Min Temperature:</strong> {info.tempMin}°C<br />
                        <strong>Max Temperature:</strong> {info.tempMax}°C<br />
                        <strong>Humidity:</strong> {info.humidity}%<br />
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
            </div>
    )
}