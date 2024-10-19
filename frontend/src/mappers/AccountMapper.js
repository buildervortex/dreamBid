import AccountDto from "../dto/account/accountDto";

export default class AccountMapper {

    static ToAccountDto(data) {
        let accountDto = new AccountDto();
        accountDto.email = data.email;
        accountDto.id = data.id;
        accountDto.userName = data.userName;

        return accountDto;
    }

}