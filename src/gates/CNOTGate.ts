/**
 * @file CNOTGate.ts
 * @description Defines the CNOTGate class, representing a Controlled-NOT (CNOT) gate in a quantum circuit.
 */

import { IGate } from "./IGate";

/**
 * Represents a Controlled-NOT (CNOT) gate in a quantum circuit.
 * The CNOT gate flips the target qubit if the control qubit is in the |1⟩ state.
 *
 * @implements IGate
 *
 * @example
 * ```typescript
 * // Create a CNOT gate with control qubit 0 and target qubit 1
 * const cnotGate = new CNOTGate(0, 1);
 * circuit.addGate(cnotGate);
 * ```
 */
export class CNOTGate implements IGate {
  /**
   * The name of the gate, used for display and identification.
   * @readonly
   */
  name = "CNOT";

  /**
   * An array containing the indices of the control and target qubits.
   * The first element is the control qubit, and the second is the target qubit.
   */
  qubits: number[];

  /**
   * Creates an instance of the CNOTGate class.
   *
   * @param controlQubit - The index of the control qubit.
   * @param targetQubit - The index of the target qubit.
   *
   * @throws {Error} Will throw an error if the control and target qubits are the same.
   *
   * @example
   * ```typescript
   * const cnotGate = new CNOTGate(0, 1); // Control qubit: 0, Target qubit: 1
   * ```
   */
  constructor(controlQubit: number, targetQubit: number) {
    if (controlQubit === targetQubit) {
      throw new Error("Control qubit and target qubit must be different.");
    }
    this.qubits = [controlQubit, targetQubit];
  }
}
