class Solver{
    constructor(){}
    formatCurrency(number,typeCurrency){
        return Intl.NumberFormat("vi-VN",{style:'currency',currency:typeCurrency}).format(number);
    }
}