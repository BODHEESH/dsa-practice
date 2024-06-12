class Car {

    constructor(model, edition) {
        this.model = model;
        this.edition = edition;
    }

    Start() {
        console.log("Starting the car class...", this.model);
    }

}
maruthi = new Car("swift", 2010);

maruthi.Start()