import { useState } from "react";
import { postBooking } from "../services/services";

const BookingForm = ({ addBooking }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkIn: false
    });

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })
        // Reset the form input values
        setFormData({
            name: "",
            email: "",
            checkIn: "",
        });
    }

    return (
        <form onSubmit={onSubmit} id="sightings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" id="name" name="name" value={formData.name} />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email" name="email" value={formData.email} />
            </div>
            {/* <div className="formWrap">
                <label htmlFor="date">Check In:</label>
                <input onChange={onChange} type="date" id="date" name="date" value={formData.date} />
            </div> */}

            <input type="submit" value="Save" id="save" />
        </form>

    );

}


export default BookingForm;