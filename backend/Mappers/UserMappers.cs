using DreamBid.Dtos.Account;
using DreamBid.Dtos.User;
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
                Email = userModel.Email,
                Id = userModel.Id,
                Bio = userModel.Bio,
                FullName = userModel.FullName,
                DOB = userModel.DOB
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

        public static User ToUserFromUpdateUserDto(this UpdateUserDto updateUserDto, User? existingUser)
        {
            var user = existingUser ?? new User();

            user.Bio = updateUserDto.Bio;
            user.DOB = updateUserDto.DOB ?? user.DOB;
            user.FullName = updateUserDto.FullName ?? user.FullName;

            return user;
        }

    }
}