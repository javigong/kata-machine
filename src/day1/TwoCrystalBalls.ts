export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        const element = breaks[i];

        if (element) break;
    }

    i -= jumpAmount;
    for (let j = 0; j < breaks.length; j++, i++) {
        const element = breaks[i];

        if (element) return i;
    }

    return -1;
}
