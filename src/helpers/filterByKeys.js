export default (array, object) => {
    return array.filter(item => {
        return Object.keys(object).every(key => item[key] === object[key])
    })
}