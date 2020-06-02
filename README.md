[![npm license](https://img.shields.io/npm/l/common-tags.svg?style=flat-square)](https://github.com/declandewet/common-tags/blob/master/license.md) 
 [![Build status](https://ci.appveyor.com/api/projects/status/75eiommx0llt3sgd?svg=true)](https://ci.appveyor.com/project/declandewet/common-tags) 
# Presentation Template

**Demo:** https://diego-arguelles.herokuapp.com/

Aurelia based project to create a web application from a json file.

This project is a hands-on example about how Aurelia framework works and how easy is to create a web application
with all features you need.

## Setup

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

## Run app - dev
Run `npm install`

Run `npm install -g aurelia-cli`

Run `au run`, then open `http://localhost:8080`

To get more information about aurelia-cli options, visit the [official docs](https://aurelia.io/docs/cli/basics/).

## Making changes
You can change any section on this project from the [json](./static/profile.json) file:
> ./static/profile.json

Each section represents a different card, supported types:

- Image and text
- Images carousel and text
- Slider (Support images, text and button links)
- Text and simple image
- Only images

You can edit primary color template and carousel timeout from the json file too.

In case you want to add new components or edit the existing configuration, look at the 
official [Aurelia Materialize Components documentation](https://aurelia-ui-toolkits.github.io/demo-materialize/).
 

## Build for production

Run `au build --env prod`.

## Deploy in prod
####Heroku:
- Use Heroku CLI, login to your account and create a new project.
- Copy the [index.php](./index.php) file from the root folder to the created `/dist` folder
- Follow the Heroku CLI steps to push your code. Remember you need to init the Heroku repo inside `/dist` folder.
- Push your code to Heroku and check the pipeline execution.

