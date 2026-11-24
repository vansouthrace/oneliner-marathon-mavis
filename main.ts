import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "My therapist says I deflect with humor, which is great news, because I was worried this session would be about my feelings.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
