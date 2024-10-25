import Joi from "joi";

class AddBidDto{

    bidAmount = "";
}

export function validateAddBidDto(addBidDto){

    const schema = Joi.object({

        bidAmount: Joi.number().required(),
    })

    return schema.validate(addBidDto);


}

export default AddBidDto;