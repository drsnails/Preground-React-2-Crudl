import { CarList } from "../cmps/CarList.jsx"
import { carService } from "../services/car.service.js"

const { useEffect, useState } = React


export function CarIndex() {
    const [cars, setCars] = useState(null)

    useEffect(() => {
        loadCars()
    }, [])

    function loadCars() {
        carService.query()
            .then(setCars)
            .catch(err => {
                console.log('Problems getting cars:', err)
            })
    }

    function onRemoveCar(carId) {
        carService.remove(carId)
            .then(() => {
                setCars(cars => cars.filter(car => car.id !== carId))
            })
            .catch(err => {
                console.log('Problems removing car:', err)
            })
    }

    if (!cars) return <div>Loading...</div>
    return (
        <section className="car-index">
            <CarList
                cars={cars}
                onRemoveCar={onRemoveCar}
            />

        </section>
    )

}