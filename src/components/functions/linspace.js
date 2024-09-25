// linspace.js
export function linspace(start, end, num) {
    // Handle cases where start and end are the same
    if (start === end) {
        return Array(num).fill(start);  // Return an array filled with start value
    }

    // Handle case where num is less than 2
    if (num < 2) return [start];  // Return an array with just the start value

    const arr = [];
    const step = (end - start) / (num - 1);  // Calculate the step size

    for (let i = 0; i < num; i++) {
        arr.push(start + (step * i));  // Generate each point
    }

    return arr;  // Return the generated array
}
