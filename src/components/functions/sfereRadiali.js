import { cos, unit } from 'mathjs';
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

    const C0r = f0*i*Z*dw^2*cosdAlfa;

    

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
    console.log('dpw: ' + dpw)

    return (C0r);
};
