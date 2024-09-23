// linspace.js
// linspace.js
export function linspace(start, end, num) {
    if (num < 2) return [start];  // Handle case where num is less than 2
    const arr = [];
    const step = (end - start) / (num - 1);  // Step size

    for (let i = 0; i < num; i++) {
        arr.push(start + (step * i));  // Generate each point
    }

    return arr;  // Ensure we return an array
}

