declare namespace _default {
    namespace input {
        const main: string;
        const vdom: string;
    }
    const plugins: {
        resolveId(id: any, importer: any): {
            id: any;
            external: boolean;
        };
    }[];
    namespace output {
        const format: string;
        const dir: string;
        const entryFileNames: string;
        const exports: string;
    }
}
export default _default;
