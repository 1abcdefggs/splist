export interface SplistOutput {
  filepath: string;
  data: string;
}

export interface SplistConfig {
  conflictMode: string;
  generateToc: boolean;
  customMarker: string | null;
  frontmatterMode: string;
  outDir: string | null;
  mode: string;
}

export interface FolderGroup {
  folderName: string;
  files: Array<{ name: string; data: string }>;
}

/** Virtual file system mock exposed for the browser environment */
export interface FsMock {
  existsSync: (p: string) => boolean;
  mkdirSync: (p: string, opts?: object) => void;
  rmSync: (p: string, opts?: object) => void;
  readFileSync: (p: string) => string;
  writeFileSync: (p: string, data: string) => void;
}

/** Virtual path mock exposed for the browser environment */
export type PathMock = Record<string, (...args: string[]) => string>;

/** Injected dependency context passed into runSplist by the caller */
export interface SplistCtx {
  fs: FsMock;
  path: PathMock;
}

declare global {
  interface Window {
    VFS: Record<string, string>;
    SPLIST_OUTPUT: SplistOutput[];
    SplistAPI: {
      runSplist: (
        virtualFilename: string,
        config: SplistConfig,
        customOptions?: Record<string, unknown>,
        ctx?: SplistCtx
      ) => Promise<void>;
      fsMock: FsMock;
      pathMock: PathMock;
    };
    JSZip: any;
    fsMock: any;
  }
}
