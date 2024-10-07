/**
 * @file PauliZGate.ts
 * @description Defines the PauliZGate class, representing a Pauli-Z gate in a quantum circuit.
 */

import { IGate } from "./IGate";

/**
 * Represents a Pauli-Z gate in a quantum circuit.
 * The Pauli-Z gate introduces a phase flip to the qubit's state, flipping the phase of the |1⟩ component.
 *
 * @implements {IGate}
 *
 * @example
 * ```typescript
 * // Create a Pauli-Z gate for qubit 0
 * const pauliZGate = new PauliZGate(0);
 * circuit.addGate(pauliZGate);
 * ```
 */
export class PauliZGate implements IGate {
  /**
   * The name of the gate, used for display and identification.
   * @readonly
   */
  name = "Z";

  /**
   * An array containing the index of the qubit the gate is applied to.
   */
  qubits: number[];

  /**
   * Creates an instance of the PauliZGate class.
   *
   * @param qubit - The index of the qubit the Pauli-Z gate is applied to.
   *
   * @throws {Error} Will throw an error if the qubit index is negative.
   *
   * @example
   * ```typescript
   * const pauliZGate = new PauliZGate(0); // Applies Z gate to qubit 0
   * ```
   */
  constructor(qubit: number) {
    if (qubit < 0) {
      throw new Error("Qubit index must be a non-negative integer.");
    }
    this.qubits = [qubit];
  }
}
