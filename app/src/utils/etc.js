class Etc {

    convertToString = (data) =>{
        return JSON.parse(JSON.stringify(data));
    }

    isObjEmpty = (objValue) => {
        if (Object.keys(objValue).length === 0){
            return true;
        }
        return false;
    }
}

export default new Etc();