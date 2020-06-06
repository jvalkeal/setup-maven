<p align="left">
  <a href="https://github.com/jvalkeal/setup-maven"><img alt="GitHub Actions status" src="https://github.com/jvalkeal/setup-maven/workflows/Main%20workflow/badge.svg"></a>
</p>

This action sets up a gradle environment for use in actions by:

- optionally downloading and caching a requested version of gradle by version and adding to PATH.
- registering problem matchers for error output

# Usage

See [action.yml](action.yml)

## Maven/Gradle Versions
```yaml
steps:
- uses: actions/checkout@v1
- uses: jvalkeal/setup-maven@v1
  with:
    maven-version: '3.6.2'
    maven-mirror: <uri to maven mirror directory> # Optional - defaults to https://archive.apache.org/dist/maven/maven-3/
    maven-file: <path to maven-file> # Optional - to install maven from.
- run: mvn package
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
