const Env = {
    fullName: "example full name",
    DOB: new Date("2001-10-24T10:44:16.063Z"),
    email: `exampleemail104@example.com`,
    username: `exampleUserName104`,
    password: "2304asdfASDFA@$12541",
    AccountId: "",
    bio: null,
    profilePictureId: 0,
    profilePictureFileName: "",
    profilePictureLength: 0,
    profilePictureImage: "",
    make: "testMake",
    model: "testModel",
    year: 2012,
    mileage: 50000,
    vin: "VC12-c",
    conditionReport: "asasdfasddfasdfas",
    startingPrice: 20000.00,
    reservePrice: 80000.00,
    carId: 0,
    carImageId: 0,
    carImageFileName: "",
    carImageLength: 0,
    carImageImage: "",
    auctionId: 0,
    auctionStartTime: new Date("2025-04-25"),
    auctionEndTime: new Date("2026-05-02"),
    winnerId: null,
    highestBidAmount: null,
    isActive: false,
    bidAmount: 0,
    Bidid: 0,
    bidDateTime: new Date(),
}

export function resetEnvToDefault() {
    Env.fullName = "example full name";
    Env.DOB = new Date("2001-10-24T10:44:16.063Z");
    Env.email = `exampleemail104@example.com`;
    Env.username = `exampleUserName104`;
    Env.password = "2304asdfASDFA@$12541";
    Env.AccountId = "";
    Env.bio = null;
    Env.profilePictureId = 0;
    Env.profilePictureFileName = "";
    Env.profilePictureLength = 0;
    Env.profilePictureImage = ""
    Env.make = "testMake";
    Env.model = "testModel";
    Env.year = 2012;
    Env.mileage = 50000;
    Env.vin = "VC12-c";
    Env.conditionReport = "asasdfasddfasdfas";
    Env.startingPrice = 20000.00;
    Env.reservePrice = 80000.00;
    Env.carId = 0;
    Env.carImageId = 0;
    Env.carImageFileName = "";
    Env.carImageLength = 0;
    Env.carImageImage = "";
    Env.auctionId = 0;
    Env.auctionStartTime = new Date("2025-04-25");
    Env.auctionEndTime = new Date("2026-05-02");
    Env.winnerId = null;
    Env.highestBidAmount = null;
    Env.isActive = false;
    Env.bidAmount = 0;
    Env.Bidid = 0;
    Env.bidDateTime = new Date();
    Env.bidAmount = 0;
}

export default Env;