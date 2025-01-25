export const helperFormatCurrency = (price: number) => {
    if(isNaN(price)) return "Invalid price"


    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price)
}