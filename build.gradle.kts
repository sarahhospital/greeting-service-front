plugins {
    base
    id("com.github.node-gradle.node") version "1.3.0"
}

node {
    download = true
}

val assembleKotlinReact by tasks.registering(NpmTask::class) {
    dependsOn(tasks.getByName("npmInstall"))
    setArgs(listOf("run", "build"))
}

tasks.getByName("build").dependsOn(assembleKotlinReact)
