/**
 * @file HadamardGate.ts
 * @description Defines the HadamardGate class, representing a Hadamard gate in a quantum circuit.
 */

import { IGate } from "./IGate";

/**
 * Represents a Hadamard gate in a quantum circuit.
 * The Hadamard gate places a qubit into an equal superposition of the |0⟩ and |1⟩ states.
 *
 * @implements IGate
 *
 * @example
 * ```typescript
 * // Create a Hadamard gate for qubit 0
 * const hadamardGate = new HadamardGate(0);
 * circuit.addGate(hadamardGate);
 * ```
 */
export class HadamardGate implements IGate {
  /**
   * The name of the gate, used for display and identification.
   * @readonly
   */
  name = "H";

  /**
   * An array containing the index of the qubit the gate is applied to.
   */
  qubits: number[];

  /**
   * Creates an instance of the HadamardGate class.
   *
   * @param qubit - The index of the qubit the Hadamard gate is applied to.
   *
   * @throws {Error} Will throw an error if the qubit index is negative.
   *
   * @example
   * ```typescript
   * const hadamardGate = new HadamardGate(0); // Applies H gate to qubit 0
   * ```
   */
  constructor(qubit: number) {
    if (qubit < 0) {
      throw new Error("Qubit index must be a non-negative integer.");
    }
    this.qubits = [qubit];
  }
}
