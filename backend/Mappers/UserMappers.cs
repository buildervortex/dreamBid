using DreamBid.Dtos.Account;
using DreamBid.Models;

namespace DreamBid.Mappers
{
    public static class UserMappers
    {
        public static UserDto ToUserDto(this User userModel)
        {
            return new UserDto
            {
                UserName = userModel.UserName,
                Email = userModel.Email
            };
        }

        public static User ToUserFromRegisterDto(this RegisterDto registerDto)
        {
            return new User
            {
                UserName = registerDto.Username,
                Email = registerDto.Email,
                DOB = registerDto.DOB,
                FullName = registerDto.FullName
            };
        }

    }
}