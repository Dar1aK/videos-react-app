## For reviewers ☀️

1. For run this project please first of all load and run project with backend [videos-strapi-app](https://github.com/Dar1aK/videos-strapi-app)
2. Run `videos-strapi-app` with `yarn` -> `yarn develop`
3. Run `videos-react-app` with `yarn` -> `yarn start`

I realised next bonus points of Test:

- Page with form for add entry
- A little bit of beautifulization with `Material UI`
- Responsive design

Except that I did:

- `Typescript` is used
- `Redux Toolkit` is used for state management
- `eslint`, `stylelint`, `prettier` and some rules for them is added
- Output error in form of create entry is added
- 'Thank you' step when create request is done
- Default text when entries not loaded in `Strapi` is added

Next steps for extension development:

- Add tests (I didn't have time for that, unfortunately 😞)
- Add form validation, for example use `Formik` or `React Hook Form` or analog
- Add delete of entry with UI
- Add edit of all fields of entry
- Do more detailed and production-like markup
- Add autorisation with `Strapi`
- Add pagination with `Strapi`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
