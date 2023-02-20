declare namespace TSE {
    /**
     * The main game engine class.
     */
    class Engine {
        private count;
        static Engine: any;
        /**
        * Creates a new engine.
        */
        constructor();
        /**
        * Starts up the engine
        */
        start(): void;
        private loop;
    }
}
export default TSE;
//# sourceMappingURL=engine.d.ts.map