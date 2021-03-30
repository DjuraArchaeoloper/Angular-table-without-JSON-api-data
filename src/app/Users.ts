export class Users
{
    id : string;
    country: string;
    state: string;

    fullName: string;
    balance: string;
    isActive: boolean;
    registered: string;


    constructor(id, country, state, fullName, balance, isActive, registered) 
    {
        this.id = id;
        this.country = country;
        this.state = state;

        this.fullName = fullName;
        this.balance = balance;
        this.isActive = isActive;
        this.registered = registered;
    }
    
}
