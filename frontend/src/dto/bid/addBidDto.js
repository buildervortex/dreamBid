import Joi from "joi";

class AddBidDto{

    bidAmount = 0;
}

export function validateAddBidDto(addBidDto){

    const schema = Joi.object({

        bidAmount: Joi.number().required(),
    })

    return schema.validate(addBidDto);


}

export default AddBidDto;