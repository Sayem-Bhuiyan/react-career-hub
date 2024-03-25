const getStoredFromLS = () => {
    const storedData = localStorage.getItem('appliedJobs');
    if(storedData) {
        return JSON.parse(storedData)
    }
    return [];
}

const saveToLS = (id) => {
    const idInt = parseInt(id)
    const savedData = getStoredFromLS();
    const isExist = savedData.includes(idInt)
    if(!isExist) {
        const saveNew = [...savedData, idInt]
        localStorage.setItem('appliedJobs', JSON.stringify(saveNew));
    }

}

export {getStoredFromLS, saveToLS}