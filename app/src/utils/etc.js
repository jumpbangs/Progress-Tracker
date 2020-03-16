class Etc {
  convertToString = data => {
    return JSON.parse(JSON.stringify(data));
  };

  isObjEmpty = objValue => {
    if (Object.keys(objValue).length === 0) {
      return true;
    }
    return false;
  };

  updateChecker = (prevValue, newValue) => {
    if (prevValue != newValue) {
      if (!newValue) {
        return prevValue;
      } else {
        return newValue;
      }
    } else {
      return prevValue;
    }
  };
}

export default new Etc();
