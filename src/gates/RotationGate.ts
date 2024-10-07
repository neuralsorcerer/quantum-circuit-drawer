/**
 * @file RotationGate.ts
 * @description Defines the RotationGate class, representing a rotation gate around the X, Y, or Z axis in a quantum circuit.
 */

import { IGate } from "./IGate";

/**
 * Represents a rotation gate (Rx, Ry, Rz) in a quantum circuit.
 * The rotation gate applies a rotation around the specified axis by a given angle to a qubit.
 *
 * @implements {IGate}
 *
 * @example
 * ```typescript
 * // Create a rotation gate around the X-axis for qubit 1 by π/2 radians
 * const rotationGate = new RotationGate('X', 1, Math.PI / 2);
 * circuit.addGate(rotationGate);
 * ```
 */
export class RotationGate implements IGate {
  /**
   * The name of the gate, including the axis and angle (in degrees).
   * Formatted as "R<axis>(<angle>°)".
   * @readonly
   */
  name: string;

  /**
   * An array containing the index of the qubit the gate is applied to.
   */
  qubits: number[];

  /**
   * The rotation angle in radians.
   */
  angle: number;

  /**
   * Creates an instance of the RotationGate class.
   *
   * @param axis - The axis of rotation ('X', 'Y', or 'Z').
   * @param qubit - The index of the qubit the rotation gate is applied to.
   * @param angle - The rotation angle in radians.
   *
   * @throws {Error} Will throw an error if the qubit index is negative or if the axis is invalid.
   *
   * @example
   * ```typescript
   * // Rotate qubit 0 around the Z-axis by π radians
   * const rotationGate = new RotationGate('Z', 0, Math.PI);
   * ```
   */
  constructor(axis: "X" | "Y" | "Z", qubit: number, angle: number) {
    if (qubit < 0) {
      throw new Error("Qubit index must be a non-negative integer.");
    }
    if (!["X", "Y", "Z"].includes(axis)) {
      throw new Error("Axis must be 'X', 'Y', or 'Z'.");
    }

    const angleDegrees = (angle * (180 / Math.PI)).toFixed(1);
    this.name = `R${axis}(${angleDegrees}°)`;
    this.qubits = [qubit];
    this.angle = angle;
  }
}
