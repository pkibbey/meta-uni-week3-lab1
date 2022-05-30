class GiftExchange {
    static pairs(names) {
        // randomize the names into pairs
        const namedPairs = [];

        while (names.length) {
            const currentPair = []
            
            while (currentPair.length < 2 && names.length > 0) {
                const index = Math.floor(Math.random() * names.length)
                currentPair.push(names[index])
                names.splice(index, 1)                
            }

            namedPairs.push(currentPair)
        }
        
        return namedPairs;
    }

    static traditional(names) {
        // convert the names into pairs
        const newPairs = this.pairs(names)
        return newPairs.reduce((prev, item, index) => {
            if (index + 1 === newPairs.length) {
                return [
                    ...prev,
                    `${item[0]} is giving a gift to ${item[1]}`,
                    `${item[1]} is giving a gift to ${newPairs[0][0]}`,
                ]
            } else {
                return [
                    ...prev,
                    `${item[0]} is giving a gift to ${item[1]}`,
                    `${item[1]} is giving a gift to ${newPairs[index+1][0]}`,
                ]
            }
        }, [])
    }
}

module.exports = GiftExchange