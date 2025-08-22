import Booking from "../../models/BookModal/Booking.js";

const createBookings = async (req, res) => {
    try {
        const { services, staff, date, time, name, email, phone, message } = req.body;

        if (!services || services.length === 0) {
            return res.status(400).json({ message: "Please select at least one service." });
        }
        if (!staff || !date || !time || !name || !email || !phone) {
            return res.status(400).json({ message: "All required fields must be filled." });
        }
        const newBooking = new Booking({
            services,
            staff,
            date,
            time,
            name,
            email,
            phone,
            message
        });
        console.log(newBooking)
        await newBooking.save();
        res.status(201).json({ message: "Booking created successfully", booking: newBooking });
    } catch (error) {
        res.status(500).json({ message: "Error creating booking", error });
    }
}
const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json({ message: "Bookings retrieved successfully", bookings });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving bookings", error });
    }
}

export { createBookings, getBookings };
