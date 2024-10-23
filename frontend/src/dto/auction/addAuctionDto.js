import Joi from "joi";

class AddAuctionDto{

    auctionStartTime = "";
    auctionEndTime = "";
}

export function validateAddAuctionDto(addAuctionDto){

    const schema = Joi.object({
     
        auctionStartTime: Joi.date()
            .min('now')
            .required()
            .messages({
                'date.min': 'Auction start time must be today or in the future.',
            }),
        auctionEndTime: Joi.date()
            .greater(Joi.ref('auctionStartTime'))
            .required()
            .custom((value, helpers) => {
                const auctionStartTime = helpers.state.ancestors[0].auctionStartTime;
                if (value < new Date(new Date(auctionStartTime).getTime() + 10 * 60000)) {
                    return helpers.message('Auction end time must be at least 10 minutes after the start time.');
                }
                return value;
            })
            .messages({
                'date.greater': 'Auction end time must be after the start time.',
            }),
    });

    return schema.validate(addAuctionDto, { abortEarly: false });
}


export default AddAuctionDto;