class Etc {

    convertToString = (data) =>{
        return JSON.parse(JSON.stringify(data));
    }

}

export default new Etc();