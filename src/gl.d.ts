declare namespace TSEZ {
    /**
     * The WebGL rendering context.
     */
    /**
     * Responsible for setting up the WebGL context.
     */
    class GLUtils {
        /**
         * The WebGL rendering context.
         */
        static gl: WebGLRenderingContext;
        /**
         * Initialize WebGL, potentially using the canvas with an assigned id matching the provided if it is defined.
         * @param elementID The ID of the element to search for.
         * @returns
         */
        static init(elementID?: string): HTMLCanvasElement;
    }
}
export declare var _: {
    GLUtils: typeof TSEZ.GLUtils;
};
export {};
//# sourceMappingURL=gl.d.ts.map