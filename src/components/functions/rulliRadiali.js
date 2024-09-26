import { cos, unit, pow, sin, tan } from 'mathjs';
import { interp1 } from './interpolation'; // Ensure this import is valid
import { linspace } from './linspace';

export const rulliRadiali = (
    dpw,
    nominalDiameter,
    innerDiameter,
    outerDiameter,
    contactAngle,
    numberOfCrowns,
    crownsPerSphere,
    numberOfRollersPerCrown,
    rollerType
) => {
    const dwe = nominalDiameter;
    const lwe = innerDiameter;
    const di = outerDiameter;
    const de = contactAngle;
    const alfa = numberOfCrowns;
    const i = crownsPerSphere;
    const Z = numberOfRollersPerCrown;
    const roller = rollerType;

    





    const cosdAlfa = cos(unit(alfa, 'deg'));

    //const Cr0 = 44 * ( 1 - ())
}