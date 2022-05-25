// create Object.create vs spread operator
const robot = {
  core: 2,
  ram: 256,
  body: {
    color: 'grey',
  },
};

// shallow & deep copy
const shallowRobot = Object.assign({}, robot);
// const shallowRobot = JSON.parse(JSON.stringify(robot));
shallowRobot.body.color = 'red';
