
import { carService } from "../services/car.service.js"

const { useState, useEffect } = React

export function CarEdit() {


    const isEdit = false
    return (
        <section className="car-edit">
            <h1>{isEdit ? 'Edit' : 'Add'} Car</h1>
            <form>
                <label htmlFor="vendor">Vendor</label>
                <input type="text" name="vendor" id="vendor" />

                <label htmlFor="speed">Speed</label>
                <input type="number" name="speed" id="speed" />
                <button>Save</button>
            </form>
        </section>
    )

}