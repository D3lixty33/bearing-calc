import { cos, unit, pow } from 'mathjs';
import { interp1 } from './interpolation'; // Ensure this import is valid
import { linspace } from './linspace';

export const sfereRadiali = (dpw, nominalDiameter, contactAngle, numberOfCrowns, crownsPerSphere) => {
    const alfa = contactAngle;
    const dw = nominalDiameter;
    const i = numberOfCrowns;
    const Z = crownsPerSphere;

    // Calculate F0
    const cosdAlfa = cos(unit(alfa, 'deg'));
    const F0 = (dw * cosdAlfa) / dpw;

    // Create linspace array
    const linspaceArrayX = linspace(0.01, 0.4, 40);

    // Debug: Check if linspaceArrayX is an array
    console.log('linspaceArrayX:', linspaceArrayX);

    // Ensure linspaceArrayX is iterable
    if (!Array.isArray(linspaceArrayX)) {
        throw new TypeError("linspaceArrayX is not an array.");
    }

    // Correctly combine arrays using the spread operator
    const XF0 = [0, ...linspaceArrayX];  // Use spread operator to concatenate
    const YF0 = [
        14.7, 14.9, 15.1, 15.3, 15.5, 15.7, 15.7, 16.1,
        16.3, 16.5, 16.4, 16.1, 15.9, 15.6, 15.4, 15.2,
        14.9, 14.7, 14.4, 14.2, 14, 13.7, 13.5, 13.2,
        13, 12.8, 12.5, 12.3, 12.1, 11.8, 11.6, 11.4,
        11.2, 10.9, 10.7, 10.5, 10.3, 10, 9.8, 9.6, 9.4
    ];

    // Perform interpolation using the calculated F0
    const f0 = interp1(XF0, YF0, F0, 'linear', 'extrap');

    const C0r = (f0 * i * Z * pow(dw, 2) * cosdAlfa);

    // Debugging Cr calculation
    const bm = 1.3;
    const Fc = dw * cosdAlfa / dpw;
    const XFc = linspace(0.01, 0.4, 40); // This should also return an array
    const YFc = [
        29.1, 35.8, 40.3, 43.8, 46.7, 49.1, 51.1, 52.8, 54.3,
        55.5, 56.6, 57.5, 58.2, 58.8, 59.3, 59.6, 59.8, 59.9,
        60, 59.9, 59.8, 59.6, 59.3, 59, 58.6, 58.2, 57.7,
        57.1, 56.6, 56, 55.3, 54.6, 53.9, 53.2, 52.4,
        51.7, 50.9, 50, 49.2, 48.4
    ];

    const fc = interp1(XFc, YFc, Fc, 'linear', 'extrap');
    const Cr = bm * fc * pow(i * cosdAlfa, 0.7) * pow(Z, 2 / 3) * pow(dw, 1.8);

    // Console logs for debugging
    console.log(`F0: ${F0}`);
    console.log('i: ' + i);
    console.log('f0: ' + f0);
    console.log('Z: ' + Z);
    console.log('linspaceArrayX: ' + linspaceArrayX);
    console.log('dw: ' + dw);
    console.log('alfa: ' + alfa);
    console.log('cosdAlfa: ' + cosdAlfa);
    console.log('Array XF0: ' + XF0);
    console.log('Array YF0: ' + YF0);
    console.log('C0r: ' + C0r);
    console.log('Cr: ' + Cr);
    console.log('dpw: ' + dpw);

    let result = {
        C0r,
        Cr,
        F0,
        f0,
        numberOfCrowns: i,
        crownsPerSphere: Z,
        nominalDiameter: dw,
        cosdAlfa
    };
    return result;
};
