//!Add a check for 21 after the deal
const Shoe = require('./shoe')



class Blackjack{
    
    constructor()
    {
    // this stores the players data
    this._shoe = new Shoe()
    this._players = []
    //this stores dealer data
    
    // this stores the betting data
    this._pot =[]
    }

   
   
    //! getters
    get pot(){
        return this._pot
    }
    //! setters
    set players(newPlayers){
        this._players = newPlayers
    }
    set dealer(newDealer){
        this._dealer = newDealer
    }
    set pot(newPot){
        this._pot = newPot
    }
    
    placeBet(player,amount){
        let  bet = {
            PlayerName : player.name,
            bet : amount 
        }
        let tempPot = this._pot
        let money = player.money
            money = money -amount 
            tempPot.push(bet)
            this._pot = tempPot
            
            player.money = money
    }
    deal(player,dealer,numDeck){
        this._shoe.createShoe(numDeck)
      
        let tempShoe = this._shoe
        
        tempShoe.shuffleDeck()
        
        for(let i = 0;i<2;i++){
            let  playerCard = tempShoe.draw()
            player.draw(playerCard)
            let dealerCard = tempShoe.draw()
            dealer.draw(dealerCard)

        }
        
        this._shoe = tempShoe
        dealer.hand[1].flipOver = true
    }
    isSplit(player){
        if(player.hand[0].face===player.hand[1].face){
            return true
        }
        else{
            return false
        }
    }
    doubleDown(){
        //todo place holder for the doubling down 
    }
    playDealer(){
        //todo place holder for the dealers logic
    }
    is21(){
        //todo place holder to check to see if there is 21
    }
    scoreHand(){
        //todo place holder to score the hand
    }
    stay(){
        //todo place holder for stay function
    }
    hit(){
        //todo place holder for hit function
    }
    
}
module.exports = Blackjack ;