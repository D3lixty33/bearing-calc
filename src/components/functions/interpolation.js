import  Spline  from 'cubic-spline';

/**
 * Interpolates the value of y at x_interp using known x and y values.
 * 
 * @param {Array<number>} x_known - Array of known x values.
 * @param {Array<number>} y_known - Array of known y values.
 * @param {number} x_interp - The x value to interpolate.
 * @param {string} method - Interpolation method (default is 'linear').
 * @param {string} extrap - Defines extrapolation behavior (default is 'extrap').
 * @returns {number} - The interpolated value of y at x_interp.
 */
export const interp1 = (x_known, y_known, x_interp, method = 'linear', extrap = 'extrap') => {
    // Check if input arrays have the same length
    if (x_known.length !== y_known.length) {
        throw new Error('x_known and y_known arrays must have the same length');
    }

    // Sort the known values
    const sortedIndices = [...x_known.keys()].sort((a, b) => x_known[a] - x_known[b]);
    const x_sorted = sortedIndices.map(i => x_known[i]);
    const y_sorted = sortedIndices.map(i => y_known[i]);

    // Spline Interpolation
    if (method === 'spline') {
        const spline = new Spline(x_sorted, y_sorted);
        return spline.at(x_interp);
    }

    // Handle extrapolation if x_interp is out of bounds
    if (extrap === 'extrap') {
        if (x_interp < x_sorted[0]) {
            return y_sorted[0];  // Extrapolate to the first known point
        }
        if (x_interp > x_sorted[x_sorted.length - 1]) {
            return y_sorted[y_sorted.length - 1];  // Extrapolate to the last known point
        }
    }

    // Find the interval that contains x_interp
    let i = 0;
    while (i < x_sorted.length - 1 && x_interp > x_sorted[i + 1]) {
        i++;
    }

    // Linear interpolation
    const x1 = x_sorted[i];
    const x2 = x_sorted[i + 1];
    const y1 = y_sorted[i];
    const y2 = y_sorted[i + 1];

    // Calculate the interpolated value using linear interpolation
    const result = y1 + ((x_interp - x1) * (y2 - y1)) / (x2 - x1);
    return result;
};
