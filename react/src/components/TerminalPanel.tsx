import { useState, useEffect } from 'react';

interface TerminalPanelProps {
  inputFileName: string;
  splitMode: string;
  generateToc: boolean;
  resultsCount: number;
  errorMsg: string;
  hasInput?: boolean;
  onSplit: () => void;
}

export function TerminalPanel({
  inputFileName,
  splitMode,
  generateToc,
  resultsCount,
  errorMsg,
  hasInput,
  onSplit
}: TerminalPanelProps) {
  const [hasRunReadme, setHasRunReadme] = useState(false);
  const flags = generateToc ? ' -toc' : '';
  const cliCommand = `splist ${inputFileName || 'input.md'} ${splitMode}${flags}`;

  useEffect(() => {
    if (inputFileName === 'README.md' && resultsCount > 0) {
      setHasRunReadme(true);
    }
  }, [inputFileName, resultsCount]);

  return (
    <div className="vscode-terminal-panel">
      <div className="terminal-header">
        <div className="terminal-tabs">
          <span className="terminal-tab active">TERMINAL</span>
          <span className="terminal-tab">OUTPUT</span>
          <span className="terminal-tab">PROBLEMS</span>
        </div>
        <div className="terminal-status-info">
          CLI EQUIVALENT: <code className="cmd-badge">{cliCommand}</code>
        </div>
      </div>
      <div className="terminal-body">
        {hasRunReadme && inputFileName !== 'README.md' && (
          <div className="terminal-history-block" style={{ marginBottom: '16px', opacity: 0.8 }}>
            <div className="terminal-line prompt-line" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div><span className="prompt-path">PS C:\splist&gt;</span> <span className="prompt-cmd">splist README.md {splitMode}{flags}</span></div>
            </div>
            <div className="terminal-line success-line">
              🎉 Splisted! Successfully processed README.md
            </div>
            <div className="terminal-line hint-line" style={{ color: '#ffd700', marginTop: '4px' }}>
              💡 readme.md has been split. Please select usage.md and click "Run".
            </div>
          </div>
        )}

        <div className="terminal-line prompt-line" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div><span className="prompt-path">PS C:\splist&gt;</span> <span className="prompt-cmd">{cliCommand}</span></div>
          <button className={`terminal-run-btn ${hasInput && resultsCount === 0 ? 'glow-pulse' : ''}`} onClick={onSplit} title="Execute command">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            RUN (Enter)
          </button>
        </div>
        {errorMsg ? (
          <div className="terminal-line error-line">
            ❌ Error: {errorMsg}
          </div>
        ) : resultsCount > 0 ? (
          <>
            <div className="terminal-line success-line">
              🎉 Splisted! Successfully processed {inputFileName || 'input.md'}
            </div>
            <div className="terminal-line info-line">
              📁 Created {resultsCount} structured files in virtual output directory.
            </div>
            {inputFileName === 'README.md' && (
              <div className="terminal-line hint-line" style={{ color: '#ffd700', marginTop: '8px' }}>
                💡 readme.md has been split. Please select usage.md and click "Run".
              </div>
            )}
          </>
        ) : (
          <div className="terminal-line hint-line">
            💡 Press the RUN button above or Ctrl+Enter to execute splist.
          </div>
        )}
      </div>
    </div>
  );
}
