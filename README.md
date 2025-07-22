Task 1 -
forked & cloned the assessment repo.
Git best practices have been followed while working on the project.

Task 2 -
commit - minor syntax/redundant changes to utilities.js
commit - minor syntax/redundant changes to index.js
fixed-up/removed some syntax/redundant code to make the github actions to work

Task 3 - 
commit - updated utilities.test.js with new tests for task3

Task 4 -
commit: updated docker build and deploy
test-latest docker image was built successfully using test.Dockerfile 
created docker image - kittur-anupama-intro-to-devops-a2:test-latest@sha256:97272070b3d0b2a76172c8d53854043728cf2fa4f6064e6f22224d2a996e21c1 

Task 5 -
commit 1 - updated yml file to build test-latest docker image to exclude few folders
updated Dockerfile to exclude .git, .github, Dockerfiles and node_modules folders that was created in task 4 using test.Dockerfile
created docker image - kittur-anupama-intro-to-devops-a2:test-latest@sha256:2149b20533b5c6f4193c0c00cf20bd35d74707c3fabad553dbffc4a4744b3b35

commit 2 - updated steps to build and deploy user-latest image and exclude test folder
updated Dockerfile to exclude test folder and craete user-latest docker image using user.Dockerfile.
created docker image - kittur-anupama-intro-to-devops-a2:user-latest@sha256:e52f21b362ea23c31cff341489893344aed030b57a8558bc820434c47ab1fe30

Github repo for assessment project - https://github.com/AK577427/IATD-devops-assessment-project.git 
Docker hub repo for test-latest & user-latest images - https://hub.docker.com/r/ak577427/kittur-anupama-intro-to-devops-a2/tags
