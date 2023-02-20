
import {_} from "./gl"

const GLUtils = _.GLUtils;
var gl = GLUtils.gl

namespace TSE{
    /**
     * The main game engine class.
     */
    export class Engine{
        
        private count: number = 0
        static Engine: any

        /**
        * Creates a new engine.
        */
        public constructor() {
            GLUtils.init("canvas")
            
            console.log(GLUtils.gl)
        }
        /**
        * Starts up the engine
        */
        public start(): void {
            gl = GLUtils.gl
            console.log("App started.")
            this.loop()
        }

        private loop(): void {
            this.count++
            document.title = this.count.toString()

            requestAnimationFrame(this.loop.bind(this))
        }
    }
}



export default TSE