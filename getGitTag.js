import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

function getGitTag() {
    try {
        const tag = execSync('git describe --tags --abbrev=0').toString().trim();
        writeFileSync('public/version.txt', tag);
    } catch (error) {
        console.error('Error getting git tag:', error);
        process.exit(1);
    }
}

getGitTag();