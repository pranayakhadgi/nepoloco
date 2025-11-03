<!-- aba707de-feea-4d52-bcd5-835566ab666c 63479cb2-89e2-4536-b632-8269967e9b7b -->
# Fix Devanagari Text in Welcome Section

## Issue

The Devanagari keyword needs to be corrected from ":j4utd" to ":jfutd" to properly render "swagatam" in Devanagari script.

## Change Required

### Update WelcomeSection Component (`src/components/WelcomeSection.jsx`)

- Change the Devanagari text on line 37 from `:j4utd` to `:jfutd`
- This is a simple text replacement in the JSX content

### To-dos

- [ ] Update Devanagari keyword from ':j4utd' to ':jfutd' in WelcomeSection component