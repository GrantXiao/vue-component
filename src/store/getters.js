const getters = {
    total(state){
        let total = 0;
        for(let i=0;i<5;i++){
            total += 1;
        }
        return total
    }
}
export default getters