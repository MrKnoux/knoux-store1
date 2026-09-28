$ErrorActionPreference = "Stop"
$Project = "D:\Knoux Store"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host " KNOuX STORE - OPENCODE SESSION RESUME" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Test-Path -LiteralPath $Project)) {
    Write-Host "ERROR: Project not found: $Project" -ForegroundColor Red
    Read-Host "Press Enter"
    exit 1
}

Set-Location -LiteralPath $Project

$OpenCode = Get-Command opencode -ErrorAction SilentlyContinue
if (-not $OpenCode) {
    Write-Host "ERROR: opencode CLI was not found in PATH." -ForegroundColor Red
    Write-Host "Expected something similar to:" -ForegroundColor Yellow
    Write-Host "C:\Users\k7\AppData\Roaming\npm\opencode.cmd"
    Read-Host "Press Enter"
    exit 1
}

Write-Host "Project : $Project" -ForegroundColor Green
Write-Host "OpenCode: $($OpenCode.Source)" -ForegroundColor Green

try {
    $Branch = git branch --show-current
    $Head   = git rev-parse --short HEAD

    Write-Host "Branch  : $Branch" -ForegroundColor Green
    Write-Host "HEAD    : $Head" -ForegroundColor Green
}
catch {
    Write-Host "WARNING: Could not read Git state." -ForegroundColor Yellow
}

$Prompt = @'
RESUME THE EXISTING KNOuX STORE SESSION FROM THE REAL CURRENT WORKING TREE.

THIS IS A CONTINUATION.
DO NOT START FROM SCRATCH.
DO NOT RECREATE THE PROJECT.
DO NOT DISCARD ANY CURRENT UNCOMMITTED WORK.

PROJECT:
D:\Knoux Store

EXPECTED FEATURE BRANCH:
feat/digital-headquarters

FIRST, REFRESH REALITY.

Inspect:
- pwd
- git status --short --branch
- git branch --show-current
- git rev-parse HEAD
- git fetch origin --prune
- git rev-parse origin/feat/digital-headquarters
- git rev-parse origin/main
- git diff --stat
- untracked files
- recent commits

IMPORTANT:
The working tree previously contained a LARGE active implementation batch
(around 65-68 changed entries plus new files).

PRESERVE ALL VALID CURRENT WORK.

DO NOT:
- git reset --hard
- git clean -fd
- discard working-tree changes
- blindly checkout files
- force push
- overwrite the accepted homepage
- redesign LivingParticleMark
- restart the project
- create another replacement application

The previous active mission was a CHECKPOINT before further expansion.

==================================================
CHECKPOINT MISSION
==================================================

Before adding more major features:

1. Review the current working-tree diff.

2. Verify intentional deletions and replacements.

3. Protect:
   - src/components/HomeExperience.tsx
   - src/components/three/LivingParticleMark.tsx
   - src/components/SiteHeader.tsx
   - src/app/layout.tsx
   - src/app/globals.css
   - accepted homepage composition
   - accepted particle KNOuX identity

4. Do not modify LivingParticleMark unless an actual verified defect exists.

5. Confirm client/non-KNOuX repositories are NOT exposed as public KNOuX products.

Examples that must remain EXTERNAL / CLIENT / NON-KNOUX:
- YaRasoolAllah
- United-Olympics-Sports
- DayNightDeliveryServices1
- AL-HANA-ALZAHABYAH
- Olympics-Sports
and other unrelated repositories.

6. Product Universe must use verified canonical KNOuX products only.

==================================================
REMOVE FABRICATED CONTENT
==================================================

Continue the evidence-first cleanup already underway.

Do not publish invented:

- WordPress products
- Lighthouse scores
- KPI promises
- case-study claims
- customer results
- campaign ROI
- fabricated timelines
- testimonials
- download counts
- unsupported product features
- fake deployments

Unknown data must remain absent or honestly marked as unavailable/in development.

==================================================
RUN QUALITY GATES
==================================================

Run the REAL package.json scripts.

At minimum verify:

npm run lint
npm run typecheck
npm test
npm run build

Fix genuine failures.

Do NOT weaken tests merely to obtain green status.

==================================================
PRODUCTION PREVIEW
==================================================

After build passes:

start ONE clean production preview on a free local port.

Do not reuse a stale preview simply because it returns HTTP 200.

Open and visually inspect the REAL current build.

Verify at least:

/
 /products
 /products/[slug]
 /wordpress
 /wordpress/themes
 /wordpress/plugins
 /wordpress/blocks
 /wordpress/starter-sites
 /wordpress/solutions
 /web
 /growth
 /creative
 /solutions
 /build
 /labs
 /work
 /about
 /contact

Also check intended dynamic routes.

Desktop:
1600x1000
1440x900

Mobile:
390x844
375x812
360x800

Verify:

- accepted homepage remains intact
- KNOuX particle mark works
- no solid grey replacement logo
- no horizontal overflow
- no broken navigation
- no unintended 404
- no runtime errors
- no missing assets
- no fake content
- Product Universe uses real KNOuX evidence

==================================================
GIT SAFETY
==================================================

The local feature branch was previously observed behind the remote feature
branch by one commit.

DO NOT ASSUME THAT IS STILL TRUE.

RE-CHECK IT.

Because the working tree is large and dirty:

DO NOT blindly pull/rebase before protecting the current work.

First complete validation and create a SAFE LOCAL CHECKPOINT COMMIT
when the current batch passes its gates.

Commit to:

feat/digital-headquarters

Suggested message:

feat(store): checkpoint verified marketplace architecture and product universe

After the checkpoint exists locally:

fetch again.

If origin/feat/digital-headquarters contains commits not in local history,
reconcile them deliberately.

No force push.
No reset --hard.
No loss of current work.

==================================================
AFTER CHECKPOINT
==================================================

After the checkpoint is safe, continue the existing roadmap rather than
starting another architecture.

Continue unfinished batches:

B2 Shared architecture
B3 Software Universe
B4 WordPress division
B5 Web division
B6 Growth division
B7 Creative division
B8 Solutions
B9 KNOuX Composer
B10 Global command palette
B11 Cross-navigation
B12 Mobile refinement
B13 Accessibility / SEO / performance
B14 Visual QA
B15 Final lint/typecheck/test/build/preview/Git/CI closure

Work incrementally.

Do not accumulate another enormous uncommitted batch.

Create logical checkpoints after meaningful verified batches.

==================================================
FINAL CLOSURE
==================================================

When implementation is genuinely verified:

- review diff
- commit intended files
- fetch
- reconcile remote feature branch safely
- push SAME feature branch
- update/open PR
- run CI
- fix CI on same branch
- merge only when green
- fetch origin/main
- report actual final main SHA

DO NOT RETURN A PLAN ONLY.

CONTINUE EXECUTION FROM THE REAL CURRENT STATE.

Inspect.
Preserve.
Verify.
Fix.
Checkpoint.
Continue.
Render.
Test.
Push.
Close CI.

BEGIN NOW.
'@

Write-Host ""
Write-Host "Resuming last OpenCode session..." -ForegroundColor Cyan
Write-Host "Project changes will NOT be reset or cleaned." -ForegroundColor Yellow
Write-Host ""

& opencode --continue --auto --prompt $Prompt

Write-Host ""
Write-Host "OpenCode exited." -ForegroundColor Yellow
Read-Host "Press Enter to close"