
class Food {
    
    constructor(){
        var foodStock;
        var foodObj;
        this.image = milkImg;

    }
    getFoodStock(data){
        amountFoodStock = data.val();
        amountFoodStock= foodStock;
    }
    updateFoodStock(){
        amountFoodStock = amountFoodStock+1
        database.ref('dog').update({
            foodStock: amountFoodStock
        })
        console.log(amountFoodStock);       
        
    }
    deductFood(){
        amountFoodStock = amountFoodStock-1
        database.ref('dog').set({
            foodStock:amountFoodStock
        })
        console.log(amountFoodStock);
    }
    
    show(){
        var x = 100, y = 250;

        imageMode(CENTER);
        image(this.image, 700, 220, 70, 70)
            
            if(this.foodStock!=0){
                for(var i=0; i<this.foodStock; i++){
                    if(i%10==0){
                        x=80;
                        y=y+50
                    }
                    this.image(this.image, x, y, 50, 50);
                    x = x+30;
                }
            }

    }
}