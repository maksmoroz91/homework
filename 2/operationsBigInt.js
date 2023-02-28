export {addBigInt, subBigInt, mulBigInt, divBigInt};

function addBigInt(a, b) {
    return String(BigInt(a) + BigInt(b));
}

function subBigInt(a, b) {
    return String(BigInt(a) - BigInt(b));
}

function mulBigInt(a, b) {
    return String(BigInt(a) * BigInt(b));
}

function divBigInt(a, b) {
    return String(BigInt(a) / BigInt(b));
}