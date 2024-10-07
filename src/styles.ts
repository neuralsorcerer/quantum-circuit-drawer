/**
 * @file styles.ts
 * @description Defines the styling configuration for rendering quantum circuit diagrams.
 * Provides an interface for custom styles and a default style configuration.
 */

/**
 * Interface representing the styling options for rendering quantum circuits.
 * Users can customize the appearance of the circuit diagram by providing an object adhering to this interface.
 */
export interface StyleConfig {
  /**
   * The vertical spacing between qubit lines in pixels.
   * Determines the distance between each qubit's horizontal line in the diagram.
   * @default 50
   */
  qubitSpacing: number;

  /**
   * The horizontal spacing between gates in pixels.
   * Controls the space between each gate along the time axis (horizontal direction).
   * @default 70
   */
  gateSpacing: number;

  /**
   * The width of gate rectangles in pixels.
   * Affects the size of the visual representation of gates.
   * @default 40
   */
  gateWidth: number;

  /**
   * The height of gate rectangles in pixels.
   * Affects the size of the visual representation of gates.
   * @default 40
   */
  gateHeight: number;

  /**
   * The color of the qubit lines.
   * Accepts any valid CSS color string (e.g., hex, rgb, rgba).
   * @default "#000" (black)
   */
  lineColor: string;

  /**
   * The width of the qubit lines in pixels.
   * Determines the thickness of the horizontal lines representing qubits.
   * @default 2
   */
  lineWidth: number;

  /**
   * The fill color of gate rectangles.
   * Accepts any valid CSS color string.
   * @default "#fff" (white)
   */
  gateFill: string;

  /**
   * The stroke (border) color of gate rectangles.
   * Accepts any valid CSS color string.
   * @default "#000" (black)
   */
  gateStroke: string;

  /**
   * The stroke width of gate rectangles in pixels.
   * Determines the thickness of the gate borders.
   * @default 2
   */
  gateStrokeWidth: number;

  /**
   * The font size for gate labels in pixels.
   * Affects the size of the text inside gates.
   * @default 14
   */
  fontSize: number;

  /**
   * The font family for gate labels.
   * Accepts any valid CSS font-family string.
   * @default "Arial, sans-serif"
   */
  fontFamily: string;

  /**
   * The font color for gate labels.
   * Accepts any valid CSS color string.
   * @default "#000" (black)
   */
  fontColor: string;
}

/**
 * The default styling configuration used by the Renderer if no custom styles are provided.
 * Users can override these defaults by supplying their own styles when creating a Renderer instance.
 *
 * @example
 * ```typescript
 * const customStyles: Partial<StyleConfig> = {
 *   gateFill: '#e0f7fa',
 *   gateStroke: '#006064',
 *   fontSize: 16,
 * };
 *
 * const renderer = new Renderer(circuit, 'container-id', customStyles);
 * renderer.draw();
 * ```
 */
export const DefaultStyleConfig: StyleConfig = {
  qubitSpacing: 50,
  gateSpacing: 70,
  gateWidth: 40,
  gateHeight: 40,
  lineColor: "#000",
  lineWidth: 2,
  gateFill: "#fff",
  gateStroke: "#000",
  gateStrokeWidth: 2,
  fontSize: 14,
  fontFamily: "Arial, sans-serif",
  fontColor: "#000",
};
