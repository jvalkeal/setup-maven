import * as core from '@actions/core';
import * as mavenInstaller from './maven-installer';

async function run() {
  try {
    const mavenVersion = core.getInput('maven-version', {required: false});
    const mavenFile = core.getInput('maven-file', {required: false}) || '';
    const mavenMirror = core.getInput('maven-mirror', {required: false});
    if (mavenVersion) {
      await mavenInstaller.getMaven(mavenVersion, mavenFile, mavenMirror);
    }
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed(`Unexpected error ${error}`);
    }
  }
}

run();
