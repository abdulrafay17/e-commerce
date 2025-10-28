
export default function cartTotal(items) {

    const summed = items.reduce((sum, item)=> {
        const price = Number(item?.price || 0);
        return sum + price;
    }, 0);

    return summed.toFixed(2);
}   