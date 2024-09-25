import { cos, unit, pow, sin, tan } from 'mathjs';
import { interp1 } from './interpolation'; // Ensure this import is valid
import { linspace } from './linspace';

export const rulliRadiali = (dpw, nominalDiameter, contactAngle, numberOfCrowns, crownsPerSphere) => {
    const alfa = contactAngle;
    const dw = nominalDiameter;
    const i = numberOfCrowns;
    const Z = crownsPerSphere;


    const cosdAlfa = cos(unit(alfa, 'deg'));

    //const Cr0 = 44 * ( 1 - ())
}