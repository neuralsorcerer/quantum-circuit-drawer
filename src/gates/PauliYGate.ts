/**
 * @file PauliYGate.ts
 * @description Defines the PauliYGate class, representing a Pauli-Y gate in a quantum circuit.
 */

import { IGate } from "./IGate";

/**
 * Represents a Pauli-Y gate in a quantum circuit.
 * The Pauli-Y gate introduces a rotation around the Y-axis of the Bloch sphere, flipping the phase of the qubit's state.
 *
 * @implements {IGate}
 *
 * @example
 * ```typescript
 * // Create a Pauli-Y gate for qubit 2
 * const pauliYGate = new PauliYGate(2);
 * circuit.addGate(pauliYGate);
 * ```
 */
export class PauliYGate implements IGate {
  /**
   * The name of the gate, used for display and identification.
   * @readonly
   */
  name = "Y";

  /**
   * An array containing the index of the qubit the gate is applied to.
   */
  qubits: number[];

  /**
   * Creates an instance of the PauliYGate class.
   *
   * @param qubit - The index of the qubit the Pauli-Y gate is applied to.
   *
   * @throws {Error} Will throw an error if the qubit index is negative.
   *
   * @example
   * ```typescript
   * const pauliYGate = new PauliYGate(2); // Applies Y gate to qubit 2
   * ```
   */
  constructor(qubit: number) {
    if (qubit < 0) {
      throw new Error("Qubit index must be a non-negative integer.");
    }
    this.qubits = [qubit];
  }
}
