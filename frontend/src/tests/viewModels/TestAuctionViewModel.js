import AddAuctionDto from "../../dto/auction/addAuctionDto";
import AuctionViewModel from "../../viewModels/AuctionViewModel";
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Env from "../env";
import Test from "../utils/testUtils";

export async function testAddAuction(success, failed) {
    const addAuctionDto = new AddAuctionDto();
    addAuctionDto.auctionStartTime = Env.auctionStartTime;
    addAuctionDto.auctionEndTime = Env.auctionEndTime;

    const response = await AuctionViewModel.addAuction(addAuctionDto, Env.carId);

    if (!(response instanceof ErrorMessage)) {

        Test.assertNotNull(response.id, "addAuction id", success, failed);
        Test.assertEqual(response.auctionStartTime.toISOString(), Env.auctionStartTime.toISOString(), "addAuction startTime", success, failed)
        Test.assertEqual(response.auctionEndTime.toISOString(), Env.auctionEndTime.toISOString(), "addAuction endTime", success, failed)
        Test.assertNull(response.winnerId, "addAuction winnderId", success, failed)
        Test.assertNull(response.highestBidAmount, "addAuction highestBidAmount", success, failed)
        Test.assertFalse(response.isActive, "addAuction isActive", success, failed)

        Env.auctionId = response.id;
        Env.auctionStartTime = response.auctionStartTime;
        Env.auctionEndTime = response.auctionEndTime;
        Env.winnerId = response.winnerId;
        Env.highestBidAmount = response.highestBidAmount;
        Env.isActive = response.isActive;
        Env.carId = response.carId;
    }
    else {
        Test.assertHasOwnProperty(response, "error", `addAuction error happend. ${response.error}`, success, failed, "red");
    }
}

export async function testGetAuction(success, failed) {

    const response = await AuctionViewModel.getAuction(Env.auctionId);

    if (!(response instanceof ErrorMessage)) {

        Test.assertEqual(response.id, Env.auctionId, "getAuction make", success, failed)
        Test.assertEqual(response.auctionStartTime.toISOString(), Env.auctionStartTime.toISOString(), "getAuction startTime", success, failed)
        Test.assertEqual(response.auctionEndTime.toISOString(), Env.auctionEndTime.toISOString(), "getAuction endTime", success, failed)
        Test.assertEqual(response.winnerId, Env.winnerId, "getAuction winnerId", success, failed)
        Test.assertEqual(response.highestBidAmount, Env.highestBidAmount, "getAuction highestBidAmount", success, failed)
        Test.assertFalse(response.isActive, "getAuction isActive", success, failed)
        Test.assertEqual(response.carId, Env.carId, "getAuction carId", success, failed)

        Env.auctionId = response.id;
        Env.auctionStartTime = response.auctionStartTime;
        Env.auctionEndTime = response.auctionEndTime;
        Env.winnerId = response.winnerId;
        Env.highestBidAmount = response.highestBidAmount;
        Env.isActive = response.isActive;
        Env.carId = response.carId;
    }
    else {
        Test.assertHasOwnProperty(response, "error", `getAuction error happend. ${response.error}`, success, failed, "red");
    }
}

export async function testGetAllAuction(success, failed) {

    const response = await AuctionViewModel.getAllAuctions(Env.auctionId);

    if (!(response instanceof ErrorMessage)) {

        response.forEach(element => {

            Test.assertEqual(element.id, Env.auctionId, "getAuction make", success, failed)
            Test.assertEqual(element.auctionStartTime.toISOString(), Env.auctionStartTime.toISOString(), "getAuction startTime", success, failed)
            Test.assertEqual(element.auctionEndTime.toISOString(), Env.auctionEndTime.toISOString(), "getAuction endTime", success, failed)
            Test.assertEqual(element.winnerId, Env.winnerId, "getAuction winnerId", success, failed)
            Test.assertEqual(element.highestBidAmount, Env.highestBidAmount, "getAuction highestBidAmount", success, failed)
            Test.assertFalse(element.isActive, "getAuction isActive", success, failed)
            Test.assertEqual(element.carId, Env.carId, "getAuction carId", success, failed)
        });
    }
    else {
        Test.assertHasOwnProperty(response, "error", `getAllAuction error happend. ${response.error}`, success, failed, "red");
    }
}

export async function testDeleteAuction(success, failed) {

    const response = await AuctionViewModel.deleteAuction(Env.auctionId);

    if (!(response instanceof ErrorMessage)) {

        Test.assertEqual(response.id, Env.auctionId, "deleteAuction make", success, failed)
        Test.assertEqual(response.auctionStartTime.toISOString(), Env.auctionStartTime.toISOString(), "deleteAuction startTime", success, failed)
        Test.assertEqual(response.auctionEndTime.toISOString(), Env.auctionEndTime.toISOString(), "deleteAuction endTime", success, failed)
        Test.assertEqual(response.winnerId, Env.winnerId, "deleteAuction winnerId", success, failed)
        Test.assertEqual(response.highestBidAmount, Env.highestBidAmount, "deleteAuction highestBidAmount", success, failed)
        Test.assertFalse(response.isActive, "deleteAuction isActive", success, failed)
        Test.assertEqual(response.carId, Env.carId, "deleteAuction carId", success, failed)
    }
    else {
        Test.assertHasOwnProperty(response, "error", `deleteAuction error happend. ${response.error}`, success, failed, "red");
    }
}
