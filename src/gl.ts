namespace TSEZ{
    /**
     * The WebGL rendering context.
     */
    
    /**
     * Responsible for setting up the WebGL context.
     */
    export class GLUtils {
    /**
     * The WebGL rendering context.
     */
        static gl: WebGLRenderingContext;

        /**
         * Initialize WebGL, potentially using the canvas with an assigned id matching the provided if it is defined.
         * @param elementID The ID of the element to search for.
         * @returns 
         */
        public static init( elementID?: string ): HTMLCanvasElement
        {
            let canvas: HTMLCanvasElement
            

            if(elementID !== undefined)
            {
                canvas = document.getElementById( elementID ) as HTMLCanvasElement
                
                if(canvas === undefined || canvas === null)
                {
                    throw new Error("Can't find a canvas element named " + elementID)
                }
            }
            else 
            {
                canvas= document.createElement("canvas") as HTMLCanvasElement
                document.body.appendChild(canvas)
            }

            console.log("hi you");

            var tmpGL = canvas.getContext("webgl")
            if(tmpGL === undefined || tmpGL === null)
            {
                throw new Error("Unable to Initialize WebGL!")
            }
            GLUtils.gl = tmpGL

            return canvas

        }
    }
}


export var _ = {
    GLUtils: TSEZ.GLUtils
}




//