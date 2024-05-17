export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length;

    while (left < right) {
        const center = Math.floor((right + left) / 2);
        const element = haystack[center];
        
        if (element === needle) return true;

        if (needle < element) {
            // go left
            right = center - 1;
        } else {
            // go right
            left = center + 1;
        }
    }

    return false;
}
