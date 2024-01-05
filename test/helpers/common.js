class CommonHelpers {

    async getArrayAmount (array) {
        return array.length;
    };

    async returnRandomValueFromArray (array) {
        return array[Math.floor(Math.random()*array.length)];
    };
    
}

export default new CommonHelpers();