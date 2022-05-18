// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n) {
    return function fareMultiplier(m) {
        return m * n
    }
}

const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3) 

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}