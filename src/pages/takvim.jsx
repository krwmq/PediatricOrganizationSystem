import React, { useState, useEffect } from "react";

function Takvim() {
    const [assistant, setAssistant] = useState("");
    const [department, setDepartment] = useState("");
    const [workday, setWorkday] = useState("");
    const [assignedSchedule, setAssignedSchedule] = useState([]);

    const daysOfWeek = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    const IsımlerDizi = [
        "Ahmet Yılmaz", "Elif Kaya", "Burak Demir", "Zeynep Arslan", "Ali Can",
        "Ayşe Çelik", "Emre Özdemir", "Fatma Akbulut", "Mert Kara", "Selin Güler",
        "Ece Polat", "Büşra Çelik", "Esme Aydın", "Hande Korkmaz", "Serkan Yıldız"
    ];

    useEffect(() => {
        const savedSchedules = JSON.parse(localStorage.getItem("assignedSchedules"));
        if (savedSchedules) {
            setAssignedSchedule(savedSchedules);
        }
    }, []);

    useEffect(() => {
        if (assignedSchedule.length > 0) {
            localStorage.setItem("assignedSchedules", JSON.stringify(assignedSchedule));
        }
    }, [assignedSchedule]);
    const handleClearSchedules = () => {
        localStorage.removeItem("assignedSchedules"); // localStorage'dan veriyi sil
        setAssignedSchedule([]); // State'i boşalt
    };

    const handleCreateSchedule = () => {
        if (!assistant || !department || !workday) {
            alert("Lütfen tüm alanları doldurun.");
            return;
        }

        const newSchedule = {
            assistant,
            department,
            workday
        };

        setAssignedSchedule([...assignedSchedule, newSchedule]);

        setAssistant("");
        setDepartment("");
        setWorkday("");
    };

    const getScheduleForDay = (day) => {
        return assignedSchedule.filter(schedule => schedule.workday === day);
    };

    return (
        <div>
            <header className="sayfa-header">
                <h1>Takvim Sayfası</h1>
            </header>
            <div className="container2">
                <div className="content">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>ASİSTAN YERLEŞTİRME PANELİ</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h5>Asistan Seçimi:</h5>
                            <select
                                className="form-control"
                                id="assistant"
                                value={assistant}
                                onChange={(e) => setAssistant(e.target.value)}
                            >
                                <option value="" disabled>
                                    Bir asistan seçiniz
                                </option>
                                {IsımlerDizi.map((isim, index) => (
                                    <option value={isim} key={index}>
                                        {isim}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h5>Asistan Bölümü:</h5>
                            <select
                                className="form-control"
                                id="department"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            >
                                <option value="" disabled>
                                    Bir bölüm seçiniz
                                </option>
                                <option value="Çocuk Acil">Çocuk Acil</option>
                                <option value="Çocuk Yoğun Bakımı">Çocuk Yoğun Bakımı</option>
                                <option value="Çocuk Hematolojisi ve Onkolojisi">Çocuk Hematolojisi ve Onkolojisi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h5>Asistanın Çalışacağı Gün:</h5>
                            <select
                                className="form-control"
                                id="workday"
                                value={workday}
                                onChange={(e) => setWorkday(e.target.value)}
                            >
                                <option value="" disabled>
                                    Bir gün seçiniz
                                </option>
                                {daysOfWeek.map((day) => (
                                    <option value={day.toLowerCase()} key={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-primary btn-block" onClick={handleCreateSchedule}>
                                Oluştur
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Takvimi alt tarafa yerleştirme */}
            <div className="row">
                <div className="col-12 text-center">
                    <h5>Atamalar:</h5>
                    <div className="calendar">
                        {daysOfWeek.map((day, index) => (
                            <div className="day" key={index}>
                                <h6>{day}</h6>
                                <ul>
                                    {getScheduleForDay(day.toLowerCase()).map((schedule, index) => (
                                        <li key={index}>
                                            {schedule.assistant} - {schedule.department}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <button className="btn btn-danger" onClick={handleClearSchedules}>
                        Tüm Atamaları Sil
                    </button>
                </div>
            </div>

            <footer className="footer-dark">
                <p>© 2024 Pediatri Organizasyon Sistemi. Tüm Hakları Saklıdır.</p>
            </footer>
        </div>
    );
}

export default Takvim;
