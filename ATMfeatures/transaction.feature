Feature: ATM Transactions

    ATM Withdraw and Deposit
    Scenario: Withdrawing money 
        Given Account has 100000 
        And Bank charge is 5000
        But Bank minimum balance is 20000
        When  Customer withdraws 50000
        Then  New Account balance 45000
        


        