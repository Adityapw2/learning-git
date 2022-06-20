var nam = ["Rice", "Dal", "Salt"]
var Quantity = [2, 3, 1]
var Price = [60, 50, 20]
var data = []
for(var i=0; i<nam.length; i++){
    var oj = {}
    oj.name = nam[i]
    oj.price = price[i]
    oj.quantity = Quantity[i]
    oj.total = function(){
        var res = this.quantity*this.price
        console.log(res)
    }
    data.push(oj)
}
console.log(data)