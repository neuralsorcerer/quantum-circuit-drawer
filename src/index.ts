/**
 * @file index.ts
 * @description Entry point for the quantum-circuit-drawer package. This file re-exports all the primary classes and configurations, making them accessible when the package is imported.
 */

import { Circuit } from "./Circuit";
import { Renderer } from "./Renderer";
import { DefaultStyleConfig } from "./styles";

import { HadamardGate } from "./gates/HadamardGate";
import { CNOTGate } from "./gates/CNOTGate";
import { PauliXGate } from "./gates/PauliXGate";
import { PauliYGate } from "./gates/PauliYGate";
import { PauliZGate } from "./gates/PauliZGate";
import { RotationGate } from "./gates/RotationGate";

/**
 * Represents a quantum circuit composed of qubits and quantum gates.
 *
 * @example
 * ```typescript
 * const circuit = new Circuit(3); // Creates a circuit with 3 qubits
 * ```
 */
export { Circuit };

/**
 * Responsible for rendering a quantum circuit onto an SVG canvas.
 *
 * @example
 * ```typescript
 * const renderer = new Renderer(circuit, 'container-id');
 * renderer.draw();
 * ```
 */
export { Renderer };

/**
 * Default styling configuration for the circuit diagrams.
 * Users can customize styles by providing their own configuration.
 *
 * @example
 * ```typescript
 * const customStyles = { gateFill: '#e0f7fa' };
 * const renderer = new Renderer(circuit, 'container-id', customStyles);
 * ```
 */
export { DefaultStyleConfig };

/**
 * Represents a Hadamard gate applied to a single qubit.
 * The Hadamard gate places a qubit into a superposition state.
 *
 * @example
 * ```typescript
 * circuit.addGate(new HadamardGate(0)); // Applies H gate to qubit 0
 * ```
 */
export { HadamardGate };

/**
 * Represents a Controlled NOT (CNOT) gate between two qubits.
 * The gate flips the target qubit if the control qubit is in the |1⟩ state.
 *
 * @example
 * ```typescript
 * circuit.addGate(new CNOTGate(0, 1)); // Control: qubit 0, Target: qubit 1
 * ```
 */
export { CNOTGate };

/**
 * Represents a Pauli-X gate applied to a single qubit.
 * The Pauli-X gate acts as a quantum NOT gate, flipping the qubit's state.
 *
 * @example
 * ```typescript
 * circuit.addGate(new PauliXGate(1)); // Applies X gate to qubit 1
 * ```
 */
export { PauliXGate };

/**
 * Represents a Pauli-Y gate applied to a single qubit.
 * The Pauli-Y gate rotates the qubit state around the Y-axis of the Bloch sphere.
 *
 * @example
 * ```typescript
 * circuit.addGate(new PauliYGate(2)); // Applies Y gate to qubit 2
 * ```
 */
export { PauliYGate };

/**
 * Represents a Pauli-Z gate applied to a single qubit.
 * The Pauli-Z gate introduces a phase flip to the qubit's state.
 *
 * @example
 * ```typescript
 * circuit.addGate(new PauliZGate(0)); // Applies Z gate to qubit 0
 * ```
 */
export { PauliZGate };

/**
 * Represents a rotation gate around a specified axis (X, Y, or Z) applied to a single qubit.
 *
 * @example
 * ```typescript
 * // Rotates qubit 1 around the X-axis by π/2 radians
 * circuit.addGate(new RotationGate('X', 1, Math.PI / 2));
 * ```
 */
export { RotationGate };
