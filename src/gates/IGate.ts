/**
 * @file IGate.ts
 * @description Defines the IGate interface, representing a generic quantum gate in a quantum circuit.
 */

/**
 * Interface representing a generic quantum gate in a quantum circuit.
 * All quantum gate classes should implement this interface to ensure consistency.
 *
 * @interface IGate
 */
export interface IGate {
  /**
   * The name of the gate.
   * Used for display purposes and identification within the circuit diagram.
   *
   * @type {string}
   * @example
   * "H"          // Hadamard gate
   * "CNOT"       // Controlled-NOT gate
   * "Rx(90°)"    // Rotation gate around the X-axis by 90 degrees
   */
  name: string;

  /**
   * An array of qubit indices that the gate acts upon.
   * The indices correspond to the positions of qubits in the circuit.
   *
   * @type {number[]}
   * @example
   * [0]          // Single-qubit gate acting on qubit 0
   * [0, 1]       // Two-qubit gate acting on qubits 0 and 1 (e.g., CNOT gate)
   */
  qubits: number[];
}
