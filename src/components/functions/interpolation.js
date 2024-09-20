// src/functions/interp1.js

export const interp1 = (x_known, y_known, x_interp) => {
    if (x_known.length !== y_known.length) {
        throw new Error('x_known and y_known arrays must have the same length');
    }

    // Ensure the known x values are sorted
    let sortedIndices = [...x_known.keys()].sort((a, b) => x_known[a] - x_known[b]);
    let x_sorted = sortedIndices.map(i => x_known[i]);
    let y_sorted = sortedIndices.map(i => y_known[i]);

    // Find the interval that contains x_interp
    let i = 0;
    while (i < x_sorted.length - 1 && x_interp > x_sorted[i + 1]) {
        i++;
    }

    // Handle extrapolation if x_interp is out of bounds
    if (x_interp < x_sorted[0]) {
        return y_sorted[0];  // Extrapolate to the first known point
    }
    if (x_interp > x_sorted[x_sorted.length - 1]) {
        return y_sorted[y_sorted.length - 1];  // Extrapolate to the last known point
    }

    // Linear interpolation
    let x1 = x_sorted[i], x2 = x_sorted[i + 1];
    let y1 = y_sorted[i], y2 = y_sorted[i + 1];

    return y1 + (x_interp - x1) * (y2 - y1) / (x2 - x1);
};

