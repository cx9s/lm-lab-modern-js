// Instructions can be found in rest_parameters.md

export function add(...params) {
  //console.log(params);
  return params.reduce((sum, param) => sum + param, 0);
}

// add(1, 2, 3, 4, 5);

// module.exports = add;
