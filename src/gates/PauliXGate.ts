/**
 * @file PauliXGate.ts
 * @description Defines the PauliXGate class, representing a Pauli-X gate in a quantum circuit.
 */

import { IGate } from "./IGate";

/**
 * Represents a Pauli-X gate in a quantum circuit.
 * The Pauli-X gate acts as a quantum NOT gate, flipping the qubit's state from |0⟩ to |1⟩ and vice versa.
 *
 * @implements {IGate}
 *
 * @example
 * ```typescript
 * // Create a Pauli-X gate for qubit 1
 * const pauliXGate = new PauliXGate(1);
 * circuit.addGate(pauliXGate);
 * ```
 */
export class PauliXGate implements IGate {
  /**
   * The name of the gate, used for display and identification.
   * @readonly
   */
  name = "X";

  /**
   * An array containing the index of the qubit the gate is applied to.
   */
  qubits: number[];

  /**
   * Creates an instance of the PauliXGate class.
   *
   * @param qubit - The index of the qubit the Pauli-X gate is applied to.
   *
   * @throws {Error} Will throw an error if the qubit index is negative.
   *
   * @example
   * ```typescript
   * const pauliXGate = new PauliXGate(1); // Applies X gate to qubit 1
   * ```
   */
  constructor(qubit: number) {
    if (qubit < 0) {
      throw new Error("Qubit index must be a non-negative integer.");
    }
    this.qubits = [qubit];
  }
}
