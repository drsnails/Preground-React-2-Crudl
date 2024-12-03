import { CarPreview } from "./CarPreview.jsx";

export function CarList({ cars, onRemoveCar }) {
    return (

        <ul className="car-list">
            {cars.map(car =>
                <li key={car.id}>
                    <CarPreview car={car} />
                    <section>
                        <button onClick={() => onRemoveCar(car.id)}> Remove</button>
                        <button >Details</button>
                        <button >Edit</button>
                    </section>
                </li>
            )}
        </ul>
    )

}