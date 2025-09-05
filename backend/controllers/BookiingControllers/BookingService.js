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

const cancelBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findById(id);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        booking.status = "canceled";
        await booking.save();

        res.status(200).json({ message: "Booking canceled successfully", booking });
    } catch (error) {
        res.status(500).json({ message: "Error canceling booking", error });
    }
}

const rescheduledBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, time } = req.body;

        const booking = await Booking.findByIdAndUpdate(
            id,
            { date, time, status: "rescheduled" },
            { new: true }
        );

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json({
            message: "Booking rescheduled successfully",
            booking,
        });
    } catch (error) {
        res.status(500).json({ message: "Error rescheduling booking", error });
    }
};

const deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByIdAndDelete(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }   
        res.status(200).json({ message: "Booking deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting booking", error });
    }
};

const getDateWiseBookings = async (req, res) => {
  try {
    const bookings = await Booking.aggregate([
  {
    $addFields: {
      convertedDate: { $toDate: "$date" }
    }
  },
  {
    $group: {
      _id: {
        $dateToString: { format: "%Y-%m-%d", date: "$convertedDate" }
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

    const formatted = bookings.map((b) => ({
      date: b._id,
      count: b.count,
    }));
    console.log(formatted);

    res.status(200).json(formatted);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching date-wise bookings",
      error: error.message,
    });
  }
};


const getRecentBookings = async (req, res) => {
  try {
    const recent = await Booking.find()
      .sort({ date: -1 }) 
      .limit(5);        

    res.status(200).json(recent);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recent bookings", error });
  }
};

export { createBookings, getBookings, cancelBooking, rescheduledBooking, deleteBooking, getDateWiseBookings, getRecentBookings };