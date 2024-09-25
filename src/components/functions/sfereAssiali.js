import { cos, unit, pow, sin, tan } from 'mathjs';
import { interp1 } from './interpolation'; // Ensure this import is valid
import { linspace } from './linspace';

export const sfereAssiali = (dpw, nominalDiameter, contactAngle, numberOfCrowns, crownsPerSphere) => {
    const alfa = contactAngle;
    const dw = nominalDiameter;
    const i = numberOfCrowns;
    const Z = crownsPerSphere;

    // Calculate F0
    const cosdAlfa = cos(unit(alfa, 'deg'));
    const sindAlfa = sin(unit(alfa, 'deg'));
    const tandAlfa = tan(unit(alfa, 'deg'));
    const F0 = (dw * cosdAlfa) / dpw;

    console.log('cosdAlfa: ' + cosdAlfa);
    console.log('dw: ' + dw);
    console.log('dpw: ' + dpw);
    console.log('F0: ' + F0);

    // Create linspace array
    const linspaceArrayX = linspace(0.01, 0.35, 35);

    // Debug: Check if linspaceArrayX is an array
    console.log('linspaceArrayX:', linspaceArrayX);

    // Ensure linspaceArrayX is iterable
    if (!Array.isArray(linspaceArrayX)) {
        throw new TypeError("linspaceArrayX is not an array.");
    }

    // Correctly combine arrays using the spread operator
    const XF0 = [0, ...linspaceArrayX];
    const YF0 = [
        61.6, 60.8, 59.9, 59.1, 58.3, 57.5, 56.7, 55.9, 55.1, 54.3,
        53.5, 52.7, 51.9, 51.2, 50.4, 49.6, 48.8, 48, 47.3, 46.5,
        45.7, 45, 44.2, 43.5, 42.7, 41.9, 41.2, 40.5, 39.7, 39,
        38.2, 37.5, 36.8, 36, 35.3, 34.6
    ]; // Ensure that YF0 has the same number of elements as XF0

    if (XF0.length !== YF0.length) {
        throw new Error("XF0 and YF0 arrays must be the same length.");
    }

    // Perform interpolation using the calculated F0
    const f0 = interp1(XF0, YF0, F0, 'linear', 'extrap');
    console.log('f0: ' + f0);
    if (f0 === undefined) {
        throw new Error("Interpolation failed. Check XF0, YF0, and F0 values.");
    }

    const C0r = f0 * i * Z * pow(dw, 2) * sindAlfa;
    console.log('C0r: ' + C0r);
    console.log('alfa: ' + alfa);
    const bm = 1.3;

    switch (true) {
        case (alfa == 90):
            var Fc = dw / dpw;
            var XFc = linspace(0.01, 0.35, 35);
            var YFc = [36.7, 45.2, 51.1, 55.7, 59.5, 62.9, 65.8, 68.5, 71, 73.3, 75.4, 77.4, 79.3, 81.1, 82.7, 84.4, 85.9, 87.4, 88.8, 90.2, 91.5, 92.8, 94.1, 95.3, 96.4, 97.6, 98.7, 99.8, 100.8, 101.9, 102.9, 103.9, 104.8, 105.8, 165.2];
            var fc = interp1(XFc, YFc, Fc, 'linear', 'extrap');
            break;

        case (alfa == 45):
            var Fc = dw * cosdAlfa / dpw;
            var XFc = linspace(0.01, 0.3, 30);
            var YFc = [42.1, 51.7, 58.2, 63.3, 67.3, 70.7, 73.5, 75.9, 78, 79.7, 81.1, 82.3, 83.3, 84.1, 84.7, 85.1, 85.4, 85.5, 85.5, 85.4,
                85.2, 84.9, 84.5, 84, 83.4, 82.8, 82, 81.3, 80.4, 79.6];
            var fc = interp1(XFc, YFc, Fc, 'linear', 'extrap');
            break;

        case (alfa == 60):
            var Fc = dw * cosdAlfa / dpw;
            var XFc = linspace(0.01, 0.2, 20);
            var YFc = [39.2, 48.1, 54.2, 58.9, 62.6, 65.8, 68.4, 70.7, 72.6, 74.2, 75.5, 76.6, 77.5, 78.3, 78.8, 79.2, 79.5, 79.6, 79.6, 79.5];
            var fc = interp1(XFc, YFc, Fc, 'linear', 'extrap');
            break;

        case (alfa == 75):
            var Fc = dw * cosdAlfa / dpw;
            var XFc = linspace(0.01, 0.1, 10);
            var YFc = [37.3, 45.9, 51.7, 56.1, 59.7, 62.7, 65.2, 67.3, 69.2, 70.7];
            var fc = interp1(XFc, YFc, Fc, 'linear', 'extrap');
            break;
    };

    switch (true) {
        case (dw <= 25.4 && alfa == 90):
            var Cr = bm * fc * (pow(Z, 2 / 3) * pow(dw, 1.8));
            break;

        case (dw > 25.4 && alfa == 90):
            var Cr = 3.647 * bm * fc * (pow(Z, 2 / 3) * pow(dw, 1 / 4));
            break;

        case (dw <= 25.4 && alfa != 90):
            var Cr = bm * fc * (pow(cosdAlfa, 0.7) * pow(Z, 2 / 3) * pow(dw, 1.8));
            break;

        case (dw > 25.4 && alfa != 90):
            var Cr = 3.647 * bm * fc * (pow(cosdAlfa, 0.7) * pow(Z, 2 / 3) * pow(dw, 1 / 4));
    };
    console.log('C0r: ' + C0r);
    console.log('Cr: ' + Cr);
    console.log('bm: ' + bm);
    console.log('fc: ' + fc);
    console.log('Fc: ' + Fc);
    console.log('XFc: ' + XFc);
    console.log('YFc: ' + YFc)

    // Return the results if needed
    return { C0r, Cr, F0, f0, numberOfCrowns: i, crownsPerSphere: Z, nominalDiameter: dw };
};
