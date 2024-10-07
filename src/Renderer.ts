/**
 * @file Renderer.ts
 * @description Handles the rendering of quantum circuits onto an SVG canvas using svg.js.
 */

import { Circuit } from "./Circuit";
import { IGate } from "./gates/IGate";
import { SVG, Svg } from "@svgdotjs/svg.js";
import { StyleConfig, DefaultStyleConfig } from "./styles";

/**
 * The Renderer class is responsible for visualizing a quantum circuit on an SVG canvas.
 * It takes a Circuit object and renders the qubits, gates, and connections according to the specified styles.
 */
export class Renderer {
  /**
   * The quantum circuit to be rendered.
   */
  circuit: Circuit;

  /**
   * The SVG canvas where the circuit will be drawn.
   */
  svg: Svg;

  /**
   * The styling configuration for rendering the circuit.
   */
  styles: StyleConfig;

  /**
   * Creates a new Renderer instance.
   * @param circuit - The Circuit object representing the quantum circuit to render.
   * @param containerId - The ID of the HTML element where the SVG canvas will be added.
   * @param styles - (Optional) Custom styles to override the default rendering styles.
   *
   * @example
   * ```typescript
   * const circuit = new Circuit(2);
   * const renderer = new Renderer(circuit, 'circuit-container', { gateFill: '#e0f7fa' });
   * renderer.draw();
   * ```
   */
  constructor(
    circuit: Circuit,
    containerId: string,
    styles?: Partial<StyleConfig>
  ) {
    this.circuit = circuit;
    this.svg = SVG().addTo(`#${containerId}`).size("100%", "100%");
    this.styles = { ...DefaultStyleConfig, ...styles };
  }

  /**
   * Renders the quantum circuit onto the SVG canvas.
   * This method iterates over the qubits and gates in the circuit and draws them using SVG elements.
   */
  draw(): void {
    const { numQubits, gates } = this.circuit;
    const {
      qubitSpacing,
      gateSpacing,
      gateWidth,
      gateHeight,
      lineColor,
      lineWidth,
      gateFill,
      gateStroke,
      gateStrokeWidth,
      fontSize,
      fontFamily,
      fontColor,
    } = this.styles;

    const totalWidth = gateSpacing * (gates.length + 1);

    // Adjust the SVG canvas size based on the circuit dimensions.
    this.svg.size(totalWidth + gateSpacing, qubitSpacing * (numQubits + 1));

    // Draw horizontal lines representing the qubits.
    for (let i = 0; i < numQubits; i++) {
      const y = qubitSpacing * (i + 1);
      this.svg
        .line(0, y, totalWidth, y)
        .stroke({ width: lineWidth, color: lineColor });
    }

    // Draw the gates on the qubit lines.
    gates.forEach((gate, index) => {
      const x = gateSpacing * (index + 1);

      if (gate.name === "CNOT") {
        // Draw a CNOT gate.
        this.drawCNOTGate(gate, x);
      } else if (gate.name.startsWith("R")) {
        // Draw a rotation gate (Rx, Ry, Rz).
        this.drawRotationGate(gate, x);
      } else {
        // Draw single-qubit gates.
        gate.qubits.forEach((qubit) => {
          const y = qubitSpacing * (qubit + 1) - gateHeight / 2;
          // Draw the gate rectangle.
          this.svg
            .rect(gateWidth, gateHeight)
            .move(x - gateWidth / 2, y)
            .fill(gateFill)
            .stroke({ width: gateStrokeWidth, color: gateStroke });
          // Draw the gate label (e.g., H, X, Y, Z).
          this.svg
            .text(gate.name)
            .move(x, y + gateHeight / 2)
            .font({ size: fontSize, family: fontFamily, fill: fontColor })
            .attr({ "text-anchor": "middle", "dominant-baseline": "middle" });
        });
      }
    });
  }

  /**
   * Draws a CNOT (Controlled-NOT) gate on the circuit.
   * @param gate - The IGate object representing the CNOT gate.
   * @param x - The x-coordinate where the gate should be drawn.
   *
   * @remarks
   * The CNOT gate is represented by a control dot on the control qubit and a target symbol on the target qubit,
   * connected by a vertical line.
   */
  private drawCNOTGate(gate: IGate, x: number): void {
    const { qubitSpacing, gateStroke, gateStrokeWidth, lineColor, lineWidth } =
      this.styles;
    const controlQubit = gate.qubits[0];
    const targetQubit = gate.qubits[1];
    const y1 = qubitSpacing * (controlQubit + 1);
    const y2 = qubitSpacing * (targetQubit + 1);

    // Draw the control dot at the control qubit line.
    this.svg
      .circle(8)
      .move(x - 4, y1 - 4)
      .fill(gateStroke);

    // Draw the vertical line connecting the control and target qubits.
    this.svg.line(x, y1, x, y2).stroke({ width: lineWidth, color: lineColor });

    // Draw the target qubit symbol (a circle with a plus sign inside).
    const gateSize = 20;
    this.svg
      .circle(gateSize)
      .move(x - gateSize / 2, y2 - gateSize / 2)
      .fill("#fff")
      .stroke({ width: gateStrokeWidth, color: gateStroke });

    // Draw the horizontal line of the plus sign.
    this.svg
      .line(x - gateSize / 4, y2, x + gateSize / 4, y2)
      .stroke({ width: gateStrokeWidth, color: gateStroke });

    // Draw the vertical line of the plus sign.
    this.svg
      .line(x, y2 - gateSize / 4, x, y2 + gateSize / 4)
      .stroke({ width: gateStrokeWidth, color: gateStroke });
  }

  /**
   * Draws a rotation gate (Rx, Ry, Rz) on the circuit.
   * @param gate - The IGate object representing the rotation gate.
   * @param x - The x-coordinate where the gate should be drawn.
   *
   * @remarks
   * Rotation gates are drawn as rectangles with the rotation axis and angle displayed as the label.
   */
  private drawRotationGate(gate: IGate, x: number): void {
    const {
      qubitSpacing,
      gateWidth,
      gateHeight,
      gateFill,
      gateStroke,
      gateStrokeWidth,
      fontSize,
      fontFamily,
      fontColor,
    } = this.styles;
    gate.qubits.forEach((qubit) => {
      const y = qubitSpacing * (qubit + 1) - gateHeight / 2;
      // Draw the gate rectangle.
      this.svg
        .rect(gateWidth, gateHeight)
        .move(x - gateWidth / 2, y)
        .fill(gateFill)
        .stroke({ width: gateStrokeWidth, color: gateStroke });
      // Draw the gate label with rotation information (e.g., Rx(90°)).
      this.svg
        .text(gate.name)
        .move(x, y + gateHeight / 2)
        .font({ size: fontSize - 2, family: fontFamily, fill: fontColor })
        .attr({ "text-anchor": "middle", "dominant-baseline": "middle" });
    });
  }
}
