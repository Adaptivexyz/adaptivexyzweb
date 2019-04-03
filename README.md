# AdaptiveXYZ Website
## Technology JAMstack

This site is built with the following JAMstack components:
- GatsbyJS
- Ghost - self hosted backend instance running on Google Cloud Platform
- Firebase - static web hosting with CDN
- REACT - front end progressive web application
- Graphql - database
- Circle CI


## Instructions

To run locally you can clone the project from 
```
git clone https://github.com/Adaptivexyz/adaptivexyzweb.git
cd adaptivexyzweb
```



Before you run the install, you need to have a backend configured where your blog content will pull from.  For adaptivexyz.com content, please see the private repository adaptivexyz/adaptive-api-keys.  

In the root directory create the following file:

```
touch .ghost.json
```

In the file add the following:

```
{
  "development": {
    "apiUrl": "GHOST-DEVELOPMENT-SITE",
    "contentApiKey": "CONTENT-API-KEY"
  },
  "production": {
    "apiUrl": "GHOST-PRODUCTION-SITE",
    "contentApiKey": "CONTENT-API-KEY"
  }
}
```

Then build locally

```
yarn
```

After yarn completes run your locally development build
```
gatsby develop
```

You site should be served at:

```localhost:8000```

## Thanks

[Jonathan Cary's blog](https://medium.com/@jonathan_cary/deploying-a-gatsby-site-to-firebase-with-circleci-d2dae648cfc9)


