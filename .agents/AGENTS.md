# Project-Specific Agent Rules

- **Ad-hoc Testing Constraints**: When creating temporary files or running ad-hoc tests, DO NOT place them in the project root OR directly inside the `demo_cases/` root folder. You must create a dedicated sub-directory (e.g., `demo_cases/test_runs/` or `demo_cases/sandbox/`) to keep the workspace and the `demo_cases` directory clean and organized.

- **Bug Fixing Protocol**: 
  1. Create a masked/dummy markdown test case in `demo_cases/sandbox/` reproducing the structural issue.
  2. Verify the failure.
  3. Fix the code in `src/core/` (respecting the Phase 1-4 pipeline architecture).
  4. Run the sandbox test to verify the fix.
  5. Run `npm run demo` to ensure no regressions in existing features.

- **Architecture Integrity**: `splist` relies on a strict 4-phase pipeline (Phase 1: Parse, Phase 2: Index, Phase 3: Split, Phase 4: Output). Always place modifications in the appropriate phase file. Do not create monolithic files.

- **Release Protocol**: Adhere to `DEVELOPS/RELEASE_WORKFLOW.md`. Code changes should be pushed to the user's fork and submitted as a PR to `upstream`. Do not alter the npm version or release workflows without explicit instruction.
