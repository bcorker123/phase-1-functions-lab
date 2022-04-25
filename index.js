// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    return Math.abs(42 - pickUpLocation);
};

function distanceFromHqInFeet(pickUpLocation) {
    return 264 * distanceFromHqInBlocks(pickUpLocation);
};

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
};

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    } else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    }
};