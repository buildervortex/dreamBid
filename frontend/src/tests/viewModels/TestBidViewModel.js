import AddBidDto from "../../dto/bid/addBidDto";
import BidViewModel from "../../viewModels/BidViewModel";
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Env from "../env";
import Test from "../utils/testUtils";

export async function testPlaceBid(success, failed) {
    const addBidDto = new AddBidDto();

    addBidDto.bidAmount = Env.bidAmount;

    const response = await BidViewModel.placeBid(Env.auctionId, addBidDto);

    if (!(response instanceof ErrorMessage)) {
        Test.assertNotNull(response.id, "placeBid id", success, failed);
        Test.assertNotNull(response.bidDateTime, "placeBid dateTime", success, failed);
        Test.assertEqual(response.bidAmount, Env.bidAmount, "placeBid bid amount", success, failed)
        Test.assertEqual(response.auctionId, Env.auctionId, "placeBid auction id", success, failed)
        Test.assertEqual(response.userId, Env.AccountId, "placeBid user id", success, failed)

        Env.Bidid = response.id;
        Env.bidDateTime = response.bidDateTime;
        Env.bidAmount = response.bidAmount;
    }
    else {
        Test.assertHasOwnProperty(response, "error", `placeBid error happend. ${response.error}`, success, failed, "red");
    }
}