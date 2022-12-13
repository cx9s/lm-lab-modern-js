// Instructions can be found in rest_parameters.md

export function add(...args) {
  //console.log(args);
  return args.reduce((a, b) => a + b, 0);
}

// add(1, 2, 3, 4, 5);

// module.exports = add;
