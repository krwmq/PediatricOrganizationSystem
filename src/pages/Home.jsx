import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Leaflet marker ikonlarını düzeltmek için
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function Home() {
    const [assignedSchedule, setAssignedSchedule] = useState([]);

    useEffect(() => {
        const savedSchedules = JSON.parse(localStorage.getItem("assignedSchedules"));
        if (savedSchedules) {
            setAssignedSchedule(savedSchedules);
        }
    }, []);

    const daysOfWeek = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

    const getScheduleForDay = (day) => {
        return assignedSchedule.filter(schedule => schedule.workday === day);
    };

    return (
        <div>
            <div >
            <header className="sayfa-header">
                <h1>Konum:</h1>
            </header>
                <MapContainer
                    center={[40.742359078291564, 30.325479492948375]}
                    zoom={13}
                    style={{ height: "400px", width: "90%", margin: "0 auto", marginTop: "15px", marginBottom: "20px"}} 
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[40.742359078291564, 30.325479492948375]}>
                        <Popup>Pediatri Organizasyon Sistemi Konumu</Popup>
                    </Marker>
                </MapContainer>
            </div>
            <header className="sayfa-header">
                <h1>Takvim Atamaları:</h1>
            </header>

            <div className="row">
                <div className="col-12 text-center">
                    <div className="calendar">
                        {daysOfWeek.map((day, index) => (
                            <div className="day" key={index}>
                                <h6>{day}</h6>
                                <ul>
                                    {getScheduleForDay(day.toLowerCase()).map((schedule, i) => (
                                        <li key={i}>
                                            {schedule.assistant} - {schedule.department}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <header className="sayfa-header">
                <h1>Bilgilendirme:</h1>
            </header>

            <div className="anasayfap">
                <p>
                    Pediatri, yenidoğanlardan 18 yaşına kadar olan çocukların ve ergenlerin sağlık ve hastalıklarıyla ilgilenen tıp dalıdır. Bu alan, çocukların doğumdan ergenlik dönemine kadar olan fiziksel, zihinsel ve davranışsal gelişimlerini takip eder ve hastalıklarını teşhis ederek tedavi eder. Pediatri, genel olarak çocuk sağlığı ve hastalıkları olarak da bilinir.
                </p>
            </div>

            <footer className="footer-dark">
                <p>© 2024 Pediatri Organizasyon Sistemi. Tüm Hakları Saklıdır.</p>
            </footer>
        </div>
    );
}

export default Home;
