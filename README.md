# HostelHub

A full-stack hostel booking web application. This microservice is the photo carousel for a hostel.

## Related Projects

  - https://github.com/hostelhub/reviews-and-ratings
  - https://github.com/hostelhub/check-in-availability
  - https://github.com/hostelhub/banner

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Usage

> The master branch has been updated to reflect the code for the final optimized and deployed Docker container that is on EC2.
> Check out the other branches to see the various iterations that this project went through over the course of development!

 - Seed the Mongo database and start the Express server by running the command 'npm run start' in the root directory
 - Ensure that your Express server is connected to the Mongo database
 - Create a Webpack bundle by running the command 'npm run react-dev' in the root directory
 - Navigate to localhost:3001/hostels/* , replacing the * with a number from 1-100 to view the photos for that hostel
 - Run tests by running the command 'npm run test' or 'npm run test:coverage' to view test coverage
