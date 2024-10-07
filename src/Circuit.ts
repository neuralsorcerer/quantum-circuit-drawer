/**
 * @file Circuit.ts
 * @description Defines the Circuit class, representing a quantum circuit composed of qubits and gates.
 */

import { IGate } from "./gates/IGate";

/**
 * Represents a quantum circuit consisting of qubits and quantum gates.
 *
 * @example
 * ```typescript
 * const circuit = new Circuit(3); // Creates a circuit with 3 qubits
 * circuit.addGate(new HadamardGate(0)); // Adds a Hadamard gate to qubit 0
 * ```
 */
export class Circuit {
  /**
   * The number of qubits in the circuit.
   */
  numQubits: number;

  /**
   * An array of quantum gates applied to the circuit.
   */
  gates: IGate[] = [];

  /**
   * Creates an instance of the Circuit class.
   *
   * @param numQubits - The total number of qubits in the circuit.
   */
  constructor(numQubits: number) {
    this.numQubits = numQubits;
  }

  /**
   * Adds a quantum gate to the circuit.
   *
   * @param gate - The quantum gate to be added to the circuit.
   */
  addGate(gate: IGate): void {
    this.gates.push(gate);
  }
}
