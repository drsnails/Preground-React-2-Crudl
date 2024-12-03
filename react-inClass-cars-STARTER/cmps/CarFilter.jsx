
export function CarFilter() {

    return (
        <section className="car-filter">
            <h2>Filter Our Cars</h2>
            <form>
                <label htmlFor="txt">Vendor</label>
                <input type="text" />

                <label htmlFor="minSpeed">Min Speed</label>
                <input type="number" />

                <button>Submit</button>
            </form>
        </section>
    )
}