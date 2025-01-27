import type { Config } from '@jest/types'

const baseDir = '<rootDir>/src/app';
const baseTestDir = '<rootDir>/src/tests';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseDir}/**/*.ts`
    ],
}

export default config;